import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/rescate-montana-bomberos-01.avif";
  const capas = [
    { num: "01", titulo: "Suela Vibram\xAE Megagrip Monta\xF1a", descripcion: "La suela Vibram\xAE Megagrip es el est\xE1ndar de la industria para terreno de monta\xF1a extremo. Compuesto de caucho especial con tracci\xF3n superior en roca mojada, pendientes pronunciadas y superficies irregulares. Usada por alpinistas profesionales.", specs: [{ label: "Tipo", valor: "Vibram\xAE Megagrip" }, { label: "Tracci\xF3n", valor: "Roca mojada A+" }, { label: "Uso", valor: "Alpinismo profesional" }], color: "ember" },
    { num: "02", titulo: "Patr\xF3n Auto-Limpiante Anti-Lodo", descripcion: "El patr\xF3n de la suela est\xE1 dise\xF1ado para que el lodo y la ceniza se desprendan con cada paso. En terreno forestal, la acumulaci\xF3n de lodo reduce la tracci\xF3n y aumenta el peso; el dise\xF1o auto-limpiante previene ambos problemas.", specs: [{ label: "Patr\xF3n", valor: "Auto-limpiante" }, { label: "Lodo", valor: "Se desprende solo" }, { label: "Ceniza", valor: "No se acumula" }], color: "smoke" },
    { num: "03", titulo: "Tracci\xF3n en Pendientes 45\xB0+", descripcion: "Dise\xF1ada para mantener tracci\xF3n en pendientes pronunciadas de hasta 45 grados o m\xE1s. Los incendios forestales frecuentemente ocurren en laderas empinadas de dif\xEDcil acceso; esta suela permite el acceso seguro.", specs: [{ label: "Pendientes", valor: "45\xB0+" }, { label: "Rocas", valor: "Tracci\xF3n superior" }, { label: "Seguridad", valor: "M\xE1xima" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Suela", label: "Tipo", valor: "Vibram\xAE Megagrip monta\xF1a" },
    { categoria: "Suela", label: "Compuesto", valor: "Caucho especial alta tracci\xF3n" },
    { categoria: "Suela", label: "Patr\xF3n", valor: "Auto-limpiante multi-direccional" },
    { categoria: "Tracci\xF3n", label: "Roca seca", valor: "Excelente (A+)" },
    { categoria: "Tracci\xF3n", label: "Roca mojada", valor: "Excelente (A+)" },
    { categoria: "Tracci\xF3n", label: "Pendientes", valor: "45\xB0+ certificado" },
    { categoria: "Tracci\xF3n", label: "Ceniza/lodo", valor: "Auto-limpiante" },
    { categoria: "Resistencia", label: "Temperatura suelo", valor: "260\xB0C (500\xB0F)" },
    { categoria: "Resistencia", label: "Abrasi\xF3n", valor: "Superior" },
    { categoria: "Dise\xF1o", label: "Peso (par)", valor: "1.3 kg" },
    { categoria: "Dise\xF1o", label: "Altura ca\xF1a", valor: '8" (20 cm)' },
    { categoria: "Certificaci\xF3n", label: "Norma", valor: "NFPA 1977 wildland" },
    { categoria: "Certificaci\xF3n", label: "Vibram\xAE", valor: "Megagrip certificada" }
  ];
  const catClass = { "Suela": "construccion", "Tracci\xF3n": "termico", "Resistencia": "ergonomia", "Dise\xF1o": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Incendios en Laderas Empinadas", desc: "Combate de incendios forestales en terreno monta\xF1oso con pendientes pronunciadas donde la tracci\xF3n es cr\xEDtica para la seguridad." },
    { titulo: "Terreno Rocoso de Monta\xF1a", desc: "Operaciones en zonas de sierra con rocas expuestas, mojadas o con musgo donde otras suelas resbalan." },
    { titulo: "Rescate de Monta\xF1a T\xE9cnico", desc: "Equipos de rescate de monta\xF1a que requieren tracci\xF3n m\xE1xima para acceso a v\xEDctimas en terreno dif\xEDcil." },
    { titulo: "Condiciones de Lluvia", desc: "Operaciones forestales durante temporada de lluvias donde el terreno est\xE1 mojado y resbaladizo." }
  ];
  const faqs = [
    { q: "\xBFLa suela Megagrip es mejor que la Vibram\xAE est\xE1ndar?", a: "S\xED. La <strong>Vibram\xAE Megagrip</strong> es un compuesto de caucho espec\xEDfico para <strong>tracci\xF3n extrema</strong>, especialmente en roca mojada. Es la suela usada por <strong>alpinistas profesionales</strong> y equipos de rescate de monta\xF1a. Ofrece tracci\xF3n superior en condiciones donde otras suelas resbalan." },
    { q: "\xBFCu\xE1nto dura la suela Megagrip?", a: "La suela Megagrip tiene <strong>resistencia a la abrasi\xF3n superior</strong> al promedio. En uso intensivo de temporada forestal (3-4 meses), t\xEDpicamente dura <strong>3+ temporadas</strong>. El patr\xF3n auto-limpiante tambi\xE9n reduce desgaste." },
    { q: "\xBFFunciona bien en ceniza caliente?", a: "S\xED. La suela Megagrip tiene <strong>resistencia t\xE9rmica hasta 260\xB0C</strong> para caminar sobre suelo con brasas residuales. El patr\xF3n auto-limpiante evita que la ceniza se acumule en la suela." }
  ];
  const relacionados = [
    { title: "Ligera Todo Terreno", badge: "1.2 kg", description: "La m\xE1s ligera del mercado.", href: "/productos/botas-para-bomberos/forestal/ligera-todo-terreno", buttonText: "Ver Ligera", image: IMAGE },
    { title: "Tobillo Reforzado", badge: "Soporte", description: "Prevenci\xF3n de esguinces.", href: "/productos/botas-para-bomberos/forestal/tobillo-reforzado", buttonText: "Ver Soporte", image: IMAGE },
    { title: "Resistente a Brasas", badge: "Ign\xEDfuga", description: "Para l\xEDnea de fuego.", href: "/productos/botas-para-bomberos/forestal/resistente-brasas", buttonText: "Ver Brasas", image: IMAGE },
    { title: "Casco Forestal", badge: "NFPA 1977", description: "Casco ligero wildland.", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", buttonText: "Ver Casco", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Ligera Todo Terreno", href: "/productos/botas-para-bomberos/forestal/ligera-todo-terreno" },
    { label: "Tobillo Reforzado", href: "/productos/botas-para-bomberos/forestal/tobillo-reforzado" },
    { label: "Resistente a Brasas", href: "/productos/botas-para-bomberos/forestal/resistente-brasas" },
    { label: "Transpirable Verano", href: "/productos/botas-para-bomberos/forestal/transpirable-verano" },
    { label: "Logger Trabajo Pesado", href: "/productos/botas-para-bomberos/forestal/logger-trabajo-pesado" },
    { label: "Ver Todas las Botas", href: "/productos/botas-para-bomberos" }
  ];
  const epp = [{ label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" }, { label: "Casco Forestal", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", tag: "Cabeza" }, { label: "Guantes de Trabajo", href: "/productos/guantes-para-bomberos", tag: "Manos" }];
  const articulos = [{ label: "Cat\xE1logo Bota Forestal NFPA 1977", href: "/productos/botas-para-bomberos/forestal", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Suelas Vibram\xAE", href: "/blog/incendios-forestales-equipo-combate", tag: "Blog" }];
  const directorioLinks = [{ label: "Rescate Monta\xF1a", href: "/directorio" }, { label: "Sierra Madre", href: "/directorio" }];
  const specsRapidas = [{ label: "Suela", valor: "Vibram\xAE Megagrip" }, { label: "Roca mojada", valor: "A+" }, { label: "Pendientes", valor: "45\xB0+" }, { label: "Peso", valor: "1.3 kg" }];
  const certItems = [{ code: "NFPA 1977", desc: "Wildland firefighting" }, { code: "Vibram\xAE Megagrip", desc: "M\xE1xima tracci\xF3n" }, { code: "260\xB0C", desc: "Resistencia t\xE9rmica" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Bota Forestal NFPA 1977 Suela Vibram\xAE Megagrip Monta\xF1a | BOMBERO.MX", "description": "Bota forestal NFPA 1977 con suela Vibram\xAE Megagrip para m\xE1xima tracci\xF3n en monta\xF1a. Roca mojada, pendientes 45\xB0+, auto-limpiante. M\xE9xico.", "keywords": ["bota forestal Vibram Megagrip", "bota monta\xF1a NFPA 1977", "bota tracci\xF3n roca mojada", "bota bombero monta\xF1a", "suela Vibram forestal"], "canonical": "/productos/botas-para-bomberos/forestal/suela-vibram-montana", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Botas para Bombero", href: "/productos/botas-para-bomberos" }, { label: "Bota Forestal NFPA 1977", href: "/productos/botas-para-bomberos/forestal" }, { label: "Suela Vibram\xAE Monta\xF1a" }], "heroBadge": "Bota Forestal \xB7 NFPA 1977 \xB7 Vibram\xAE Megagrip \xB7 Monta\xF1a", "heroTitle": "Bota Forestal NFPA 1977", "heroTitleHighlight": "Suela Vibram\xAE Monta\xF1a", "heroSubtitle": "Suela Vibram\xAE Megagrip con tracci\xF3n extrema para terreno de monta\xF1a. Funciona en roca mojada, pendientes de 45\xB0+ y superficies irregulares. Patr\xF3n auto-limpiante que no acumula lodo ni ceniza.", "heroSeoBlocks": [{ title: "Vibram\xAE Megagrip \u2014 M\xE1xima Tracci\xF3n", text: "La suela <strong>Vibram\xAE Megagrip</strong> es el est\xE1ndar de <strong>alpinistas profesionales</strong>. Compuesto de caucho especial con tracci\xF3n <strong>A+</strong> en roca mojada y pendientes pronunciadas." }, { title: "Patr\xF3n Auto-Limpiante", text: "El patr\xF3n de la suela <strong>desprende lodo y ceniza</strong> con cada paso. Mantiene la tracci\xF3n y evita acumulaci\xF3n de peso durante la jornada." }], "ctaBarQuote": "Cotizar Bota Monta\xF1a", "productoCategoria": "Bota Forestal Monta\xF1a", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1977" }, { modifier: "tpp", text: "Megagrip" }, { modifier: "solas", text: "45\xB0+" }], "productoMasVendido": false, "productoTitle": "Bota Forestal NFPA 1977 \u2014 Suela Vibram\xAE Monta\xF1a", "productoTitleSub": "Megagrip \xB7 Roca Mojada \xB7 Auto-Limpiante", "productoDesc": "Bota forestal con suela Vibram\xAE Megagrip para m\xE1xima tracci\xF3n en terreno de monta\xF1a. Funciona en roca mojada, pendientes pronunciadas y superficies irregulares. Patr\xF3n auto-limpiante anti-lodo. Certificaci\xF3n NFPA 1977.", "productoFeatures": ["Suela Vibram\xAE Megagrip", "Tracci\xF3n A+ roca mojada", "Pendientes 45\xB0+", "Patr\xF3n auto-limpiante", "Certificada NFPA 1977"], "productoAppTags": ["Laderas empinadas", "Terreno rocoso", "Rescate monta\xF1a", "Lluvia"], "gallery": [{ src: IMAGE, alt: "Bota forestal suela Vibram Megagrip" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Rescate monta\xF1a" }], "capasEyebrow": "Tecnolog\xEDa de Tracci\xF3n", "capasTitle": "Sistema Vibram\xAE Megagrip", "capasDesc": "M\xE1xima tracci\xF3n en monta\xF1a, auto-limpiante y resistente al calor.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de suela y tracci\xF3n.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Terreno de Monta\xF1a", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Terreno de monta\xF1a extremo</strong>: laderas empinadas, rocas mojadas, rescate t\xE9cnico y condiciones de lluvia donde la tracci\xF3n es cr\xEDtica.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1977 + Vibram\xAE Megagrip", "certsDesc": "Certificaci\xF3n <strong>NFPA 1977</strong> con suela <strong>Vibram\xAE Megagrip</strong> de m\xE1xima tracci\xF3n.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/botas-para-bomberos/forestal", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Suela Megagrip", "faqDescription": "Dudas sobre tracci\xF3n y rendimiento.", "faqDocTitle": "Ficha T\xE9cnica Vibram\xAE", "faqDocDesc": "Especificaciones de suela.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Forestal", "relacionadosTitle": "EPP Forestal Relacionado", "relacionadosDesc": "Completa tu equipo forestal NFPA 1977.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/forestal/suela-vibram-montana/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/forestal/suela-vibram-montana/index.astro";
const $$url = "/productos/botas-para-bomberos/forestal/suela-vibram-montana";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
