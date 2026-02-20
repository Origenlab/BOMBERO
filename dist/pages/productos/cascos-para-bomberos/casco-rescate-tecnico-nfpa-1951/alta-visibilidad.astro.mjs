import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/rescate-acuatico-bomberos-01.avif";
  const capas = [
    { num: "01", titulo: "Shell en Colores Fluorescentes ANSI/ISEA 107", descripcion: "El shell se fabrica en colores fluorescentes de alta visibilidad: amarillo-lima (m\xE1s visible de d\xEDa), naranja fluorescente (contraste en vegetaci\xF3n), o rojo bombero. Los pigmentos son integrales al material, no pintura superficial que se desgaste.", specs: [{ label: "Colores", valor: "Amarillo-lima, naranja, rojo" }, { label: "Norma", valor: "ANSI/ISEA 107 Clase 2+" }, { label: "Durabilidad", valor: "Color integral al shell" }], color: "ember" },
    { num: "02", titulo: "Bandas Retroreflectivas 3M Scotchlite FR", descripcion: "Bandas de material retroreflectivo resistente al fuego (FR) en posiciones estrat\xE9gicas: frente, laterales y posterior. Reflectan la luz de linternas y faros de veh\xEDculos para localizaci\xF3n nocturna del rescatista.", specs: [{ label: "Material", valor: "3M Scotchlite FR" }, { label: "Posiciones", valor: "360\xB0 (frente + lados + atr\xE1s)" }, { label: "Reflexi\xF3n", valor: ">500 cd/lux/m\xB2 (nuevo)" }], color: "smoke" },
    { num: "03", titulo: "Identificaci\xF3n Personalizable", descripcion: "\xC1reas designadas para identificaci\xF3n de brigada, n\xFAmero de unidad y nombre. Compatibles con calcoman\xEDas reflectivas o termotransferibles. Permite identificaci\xF3n r\xE1pida del rescatista en operaciones multi-agencia.", specs: [{ label: "\xC1reas", valor: "Frontal, laterales, posterior" }, { label: "M\xE9todo", valor: "Calcoman\xEDas o termotransferibles" }, { label: "Tama\xF1o texto", valor: "Hasta 3 cm altura" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Color Shell", label: "Amarillo-Lima", valor: "Mayor visibilidad diurna" },
    { categoria: "Color Shell", label: "Naranja Fluorescente", valor: "Contraste en vegetaci\xF3n" },
    { categoria: "Color Shell", label: "Rojo Bombero", valor: "Identificaci\xF3n institucional" },
    { categoria: "Color Shell", label: "Tipo pigmento", valor: "Integral al material" },
    { categoria: "Retroreflectivo", label: "Material", valor: "3M Scotchlite FR" },
    { categoria: "Retroreflectivo", label: "Cobertura", valor: "360\xB0 (frente, lados, atr\xE1s)" },
    { categoria: "Retroreflectivo", label: "Reflexi\xF3n inicial", valor: ">500 cd/lux/m\xB2" },
    { categoria: "Retroreflectivo", label: "Resistencia", valor: "FR (retardante al fuego)" },
    { categoria: "Identificaci\xF3n", label: "\xC1reas", valor: "Frontal + laterales + posterior" },
    { categoria: "Identificaci\xF3n", label: "M\xE9todo", valor: "Calcoman\xEDas reflectivas" },
    { categoria: "Certificaci\xF3n", label: "NFPA 1951", valor: "Technical Rescue" },
    { categoria: "Certificaci\xF3n", label: "ANSI/ISEA 107", valor: "Clase 2+ visibilidad" }
  ];
  const catClass = { "Color Shell": "construccion", "Retroreflectivo": "ergonomia", "Identificaci\xF3n": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "B\xFAsqueda y Rescate (SAR) Nocturno", desc: "Operaciones de b\xFAsqueda donde la localizaci\xF3n del rescatista por helic\xF3pteros y equipos de tierra es cr\xEDtica. Los colores Hi-Vis permiten tracking visual." },
    { titulo: "Rescate en Carreteras", desc: "Atenci\xF3n de accidentes vehiculares en carreteras con tr\xE1fico activo. La alta visibilidad protege al rescatista de veh\xEDculos en movimiento." },
    { titulo: "Operaciones Multi-Agencia", desc: "Emergencias donde participan m\xFAltiples corporaciones. La identificaci\xF3n clara evita confusi\xF3n y mejora coordinaci\xF3n." },
    { titulo: "Rescate Urbano en Escombros", desc: "Operaciones post-sismo donde el polvo reduce visibilidad. Los colores fluorescentes destacan sobre concreto gris." }
  ];
  const faqs = [
    { q: "\xBFCu\xE1l color es m\xE1s visible?", a: "<strong>Amarillo-lima</strong> tiene la mayor visibilidad diurna seg\xFAn estudios de percepci\xF3n visual. <strong>Naranja</strong> destaca mejor en vegetaci\xF3n verde. <strong>Rojo</strong> es menos visible pero cumple identificaci\xF3n institucional de bomberos." },
    { q: "\xBFLas bandas retroreflectivas se desgastan?", a: "S\xED, con el tiempo pierden capacidad reflectiva. La norma establece m\xEDnimo <strong>100 cd/lux/m\xB2</strong> para considerarse funcional. Cuando caen debajo de este umbral (t\xEDpicamente 3-5 a\xF1os de uso intensivo), deben <strong>reemplazarse</strong>." },
    { q: "\xBFPuedo personalizar el casco con logo de mi brigada?", a: "S\xED, hay \xE1reas designadas para personalizaci\xF3n. Se recomienda usar <strong>calcoman\xEDas reflectivas</strong> para mantener visibilidad nocturna. Evitar cubrir las bandas 3M originales." }
  ];
  const relacionados = [
    { title: "Sistema Completo Rescate", badge: "NFPA 1951", description: "Casco base con todos los accesorios.", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Linterna Integrada", badge: "LED", description: "Iluminaci\xF3n para operaciones nocturnas.", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/linterna-integrada", buttonText: "Ver Linterna", image: IMAGE },
    { title: "Botas Estructurales", badge: "NFPA 1971", description: "Botas certificadas para operaciones de rescate.", href: "/productos/botas-para-bomberos/estructural", buttonText: "Ver Botas", image: "/images/directorio/botas-bombero-proteccion-01.avif" },
    { title: "Rescate Acu\xE1tico", badge: "Flotante", description: "Configuraci\xF3n para operaciones en agua.", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/rescate-acuatico", buttonText: "Ver Acu\xE1tico", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistema-completo" },
    { label: "Shell ABS/Policarbonato", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/shell-abs" },
    { label: "Sistemas de Cuerda", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistemas-cuerda" },
    { label: "Rescate Acu\xE1tico", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/rescate-acuatico" },
    { label: "Linterna Integrada", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/linterna-integrada" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Gafas de Seguridad ANSI", href: "/productos/gafas-para-bomberos/seguridad", tag: "Ojos" }, { label: "Guantes Reflectivos", href: "/productos/guantes-para-bomberos/rescate", tag: "Manos" }, { label: "Botas Hi-Vis", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" }];
  const articulos = [{ label: "Cat\xE1logo Cascos Rescate", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951", tag: "Cat\xE1logo" }, { label: "ANSI/ISEA 107 Gu\xEDa", href: "/blog/cascos-bombero-certificados", tag: "Blog" }];
  const directorioLinks = [{ label: "SAR Nacional", href: "/directorio" }, { label: "Protecci\xF3n Civil", href: "/directorio" }];
  const specsRapidas = [{ label: "Colores", valor: "Amarillo, naranja, rojo" }, { label: "Retroreflectivo", valor: "3M Scotchlite FR 360\xB0" }, { label: "ANSI 107", valor: "Clase 2+" }, { label: "Personalizaci\xF3n", valor: "\xC1reas designadas" }];
  const certItems = [{ code: "NFPA 1951", desc: "Technical Rescue" }, { code: "ANSI/ISEA 107", desc: "Alta visibilidad Clase 2+" }, { code: "3M FR", desc: "Retroreflectivo resistente fuego" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Rescate Alta Visibilidad \u2014 Hi-Vis ANSI 107 | BOMBERO.MX", "description": "Casco rescate t\xE9cnico alta visibilidad con shell fluorescente y bandas retroreflectivas 3M Scotchlite FR. Colores amarillo-lima, naranja, rojo. NFPA 1951 + ANSI 107.", "keywords": ["casco rescate alta visibilidad", "casco hi-vis bombero", "casco fluorescente rescate", "casco reflectivo NFPA 1951"], "canonical": "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/alta-visibilidad", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco Rescate T\xE9cnico NFPA 1951", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951" }, { label: "Alta Visibilidad" }], "heroBadge": "Alta Visibilidad \xB7 ANSI 107 \xB7 3M Scotchlite", "heroTitle": "Casco Rescate T\xE9cnico", "heroTitleHighlight": "Alta Visibilidad", "heroSubtitle": "Shell en colores fluorescentes (amarillo-lima, naranja, rojo) con bandas retroreflectivas 3M Scotchlite FR para visibilidad 360\xB0. Ideal para SAR nocturno, rescate carretero y operaciones multi-agencia. Certificado NFPA 1951 + ANSI/ISEA 107.", "heroSeoBlocks": [{ title: "Colores Fluorescentes Integrales", text: "El <strong>pigmento fluorescente</strong> es integral al material del shell, no pintura superficial. Mantiene color durante toda la <strong>vida \xFAtil del casco</strong>." }, { title: "Retroreflectivo 360\xB0", text: "Bandas <strong>3M Scotchlite FR</strong> en frente, laterales y posterior. Visibles con linternas y faros vehiculares a <strong>distancias de 300+ metros</strong>." }], "ctaBarQuote": "Cotizar Casco Alta Visibilidad", "productoCategoria": "Casco Rescate Hi-Vis", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1951" }, { modifier: "tpp", text: "ANSI 107" }, { modifier: "solas", text: "Hi-Vis" }], "productoMasVendido": false, "productoTitle": "Casco Rescate \u2014 Alta Visibilidad", "productoTitleSub": "ANSI/ISEA 107 Clase 2+", "productoDesc": "Shell fluorescente amarillo-lima, naranja o rojo con bandas retroreflectivas 3M Scotchlite FR en 360\xB0. \xC1reas designadas para identificaci\xF3n de brigada. Certificado NFPA 1951 y ANSI/ISEA 107.", "productoFeatures": ["Colores fluorescentes integrales", "Bandas 3M Scotchlite FR 360\xB0", "Reflexi\xF3n >500 cd/lux/m\xB2", "\xC1reas para personalizaci\xF3n", "Certificado ANSI 107"], "productoAppTags": ["SAR nocturno", "Carreteras", "Multi-agencia", "Escombros"], "gallery": [{ src: IMAGE, alt: "Casco rescate alta visibilidad" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Rescatista Hi-Vis" }], "capasEyebrow": "Sistema de Visibilidad", "capasTitle": "Caracter\xEDsticas Hi-Vis", "capasDesc": "Colores fluorescentes y retroreflectivos para m\xE1xima visibilidad diurna y nocturna.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Alta Visibilidad", "specsDesc": "Dise\xF1ado para localizaci\xF3n r\xE1pida del rescatista.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios Hi-Vis", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p>Cualquier operaci\xF3n donde la <strong>localizaci\xF3n visual del rescatista</strong> sea cr\xEDtica: SAR nocturno, carreteras con tr\xE1fico, multi-agencia, post-sismo.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1951 + ANSI/ISEA 107", "certsDesc": "Cumple <strong>NFPA 1951</strong> para rescate t\xE9cnico y <strong>ANSI/ISEA 107</strong> Clase 2+ para alta visibilidad ocupacional.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Alta Visibilidad", "faqDescription": "Dudas sobre colores, retroreflectivos y personalizaci\xF3n.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Certificados NFPA y ANSI.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "EPP Hi-Vis", "relacionadosTitle": "Sistema Alta Visibilidad", "relacionadosDesc": "Complete con chaleco, guantes y botas retroreflectivos.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/alta-visibilidad/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/alta-visibilidad/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/alta-visibilidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
