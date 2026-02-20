import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/rescate-montana-bomberos-01.avif";
  const capas = [
    { num: "01", titulo: "Paneles de Ventilaci\xF3n Laterales", descripcion: "Paneles de malla t\xE9cnica en los laterales que permiten circulaci\xF3n de aire constante. El aire caliente del pie sale y el aire fresco entra, manteniendo temperatura confortable en climas de 30-45\xB0C.", specs: [{ label: "Paneles", valor: "Malla t\xE9cnica" }, { label: "Ventilaci\xF3n", valor: "Lateral continua" }, { label: "Clima", valor: "30-45\xB0C" }], color: "ember" },
    { num: "02", titulo: "Forro Transpirable Alta Tecnolog\xEDa", descripcion: "Forro interior de material t\xE9cnico que transporta la humedad del sudor hacia el exterior mientras bloquea la entrada de polvo y ceniza. El pie se mantiene seco incluso en jornadas de 10+ horas.", specs: [{ label: "Forro", valor: "T\xE9cnico transpirable" }, { label: "Humedad", valor: "Transporta al exterior" }, { label: "Polvo", valor: "Bloquea entrada" }], color: "smoke" },
    { num: "03", titulo: "Secado R\xE1pido Interior", descripcion: "El dise\xF1o de ventilaci\xF3n y el forro t\xE9cnico permiten que la bota se seque r\xE1pidamente despu\xE9s de la jornada. En climas c\xE1lidos con sudoraci\xF3n intensa, el secado r\xE1pido previene hongos y mal olor.", specs: [{ label: "Secado", valor: "R\xE1pido overnight" }, { label: "Hongos", valor: "Prevenci\xF3n" }, { label: "Olor", valor: "Prevenci\xF3n" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Ventilaci\xF3n", label: "Paneles", valor: "Malla t\xE9cnica laterales" },
    { categoria: "Ventilaci\xF3n", label: "Circulaci\xF3n", valor: "Continua bidireccional" },
    { categoria: "Ventilaci\xF3n", label: "Clima \xF3ptimo", valor: "30-45\xB0C" },
    { categoria: "Forro", label: "Tipo", valor: "T\xE9cnico transpirable" },
    { categoria: "Forro", label: "Transporte humedad", valor: "Wicking activo" },
    { categoria: "Forro", label: "Bloqueo", valor: "Polvo y ceniza fina" },
    { categoria: "Secado", label: "Tiempo", valor: "Overnight (8-10 hrs)" },
    { categoria: "Secado", label: "Prevenci\xF3n", valor: "Hongos y mal olor" },
    { categoria: "Dise\xF1o", label: "Peso (par)", valor: "1.1 kg" },
    { categoria: "Dise\xF1o", label: "Altura ca\xF1a", valor: '8" (20 cm)' },
    { categoria: "Suela", label: "Tipo", valor: "Vibram\xAE ventilada" },
    { categoria: "Certificaci\xF3n", label: "Norma", valor: "NFPA 1977 wildland" }
  ];
  const catClass = { "Ventilaci\xF3n": "construccion", "Forro": "termico", "Secado": "ergonomia", "Dise\xF1o": "ergonomia", "Suela": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Temporada de Incendios en M\xE9xico Central", desc: "Enero-junio en estados del centro de M\xE9xico donde las temperaturas superan 30\xB0C y la sudoraci\xF3n es intensa." },
    { titulo: "Zonas Costeras C\xE1lidas", desc: "Guerrero, Oaxaca, Veracruz y otras zonas costeras donde el calor y la humedad ambiental son elevados." },
    { titulo: "Jornadas de 10+ Horas en Calor", desc: "Operaciones prolongadas en clima c\xE1lido donde el pie necesita ventilaci\xF3n para mantener rendimiento." },
    { titulo: "Brigadas con Historial de Hongos", desc: "Personal que ha tenido problemas de hongos o mal olor por sudoraci\xF3n en botas tradicionales." }
  ];
  const faqs = [
    { q: "\xBFLos paneles de ventilaci\xF3n debilitan la bota?", a: "No. Los <strong>paneles de malla t\xE9cnica</strong> est\xE1n reforzados y ubicados en zonas de bajo estr\xE9s mec\xE1nico. La estructura principal de la bota mantiene su integridad. Los paneles son <strong>resistentes a la abrasi\xF3n</strong> y al paso de brasas peque\xF1as." },
    { q: "\xBFLa malla deja pasar ceniza al interior?", a: "La malla tiene poros suficientemente peque\xF1os para <strong>bloquear ceniza y polvo fino</strong>. Solo permite el paso de aire. Para ceniza muy fina o condiciones de mucho polvo, considerar calcetines altos que cubran la ca\xF1a." },
    { q: "\xBFEs la bota m\xE1s fresca vs la est\xE1ndar?", a: "S\xED. La diferencia de <strong>temperatura interior es de 5-8\xB0C</strong> en comparaci\xF3n con una bota cerrada est\xE1ndar. En jornadas de 10+ horas en clima c\xE1lido, esta diferencia es significativa para el <strong>confort y rendimiento</strong> del bombero." }
  ];
  const relacionados = [
    { title: "Ligera Todo Terreno", badge: "1.2 kg", description: "La m\xE1s ligera del mercado.", href: "/productos/botas-para-bomberos/forestal/ligera-todo-terreno", buttonText: "Ver Ligera", image: IMAGE },
    { title: "Resistente a Brasas", badge: "Ign\xEDfuga", description: "Para l\xEDnea de fuego.", href: "/productos/botas-para-bomberos/forestal/resistente-brasas", buttonText: "Ver Brasas", image: IMAGE },
    { title: "Tobillo Reforzado", badge: "Soporte", description: "Prevenci\xF3n de esguinces.", href: "/productos/botas-para-bomberos/forestal/tobillo-reforzado", buttonText: "Ver Soporte", image: IMAGE },
    { title: "Traje Forestal", badge: "NFPA 1977", description: "Traje ligero wildland.", href: "/productos/trajes-para-bomberos", buttonText: "Ver Traje", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Ligera Todo Terreno", href: "/productos/botas-para-bomberos/forestal/ligera-todo-terreno" },
    { label: "Suela Vibram\xAE Monta\xF1a", href: "/productos/botas-para-bomberos/forestal/suela-vibram-montana" },
    { label: "Tobillo Reforzado", href: "/productos/botas-para-bomberos/forestal/tobillo-reforzado" },
    { label: "Resistente a Brasas", href: "/productos/botas-para-bomberos/forestal/resistente-brasas" },
    { label: "Logger Trabajo Pesado", href: "/productos/botas-para-bomberos/forestal/logger-trabajo-pesado" },
    { label: "Ver Todas las Botas", href: "/productos/botas-para-bomberos" }
  ];
  const epp = [{ label: "Traje Forestal Ligero", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" }, { label: "Gafas Goggle Bombero", href: "/productos/gafas-para-bomberos/goggle", tag: "Visual" }, { label: "Casco Forestal", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", tag: "Cabeza" }];
  const articulos = [{ label: "Cat\xE1logo Bota Forestal NFPA 1977", href: "/productos/botas-para-bomberos/forestal", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Clima C\xE1lido", href: "/blog/incendios-forestales-equipo-combate", tag: "Blog" }];
  const directorioLinks = [{ label: "Brigadas Zona C\xE1lida", href: "/directorio" }, { label: "Costa Pac\xEDfico", href: "/directorio" }];
  const specsRapidas = [{ label: "Ventilaci\xF3n", valor: "Paneles laterales" }, { label: "Forro", valor: "Transpirable" }, { label: "Peso", valor: "1.1 kg" }, { label: "Clima", valor: "30-45\xB0C" }];
  const certItems = [{ code: "NFPA 1977", desc: "Wildland firefighting" }, { code: "Ventilado", desc: "Paneles malla" }, { code: "Wicking", desc: "Forro transpirable" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Bota Forestal NFPA 1977 Transpirable Verano \u2014 Ventilada | BOMBERO.MX", "description": "Bota forestal NFPA 1977 transpirable para clima c\xE1lido. Paneles de ventilaci\xF3n, forro t\xE9cnico, secado r\xE1pido. Para temperaturas 30-45\xB0C. M\xE9xico.", "keywords": ["bota forestal transpirable", "bota NFPA 1977 verano", "bota bombero ventilada", "bota forestal clima c\xE1lido", "bota incendio forestal fresca"], "canonical": "/productos/botas-para-bomberos/forestal/transpirable-verano", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Botas para Bombero", href: "/productos/botas-para-bomberos" }, { label: "Bota Forestal NFPA 1977", href: "/productos/botas-para-bomberos/forestal" }, { label: "Transpirable Verano" }], "heroBadge": "Bota Forestal \xB7 NFPA 1977 \xB7 Transpirable \xB7 Verano", "heroTitle": "Bota Forestal NFPA 1977", "heroTitleHighlight": "Transpirable Verano", "heroSubtitle": "Paneles de ventilaci\xF3n laterales y forro t\xE9cnico transpirable para climas c\xE1lidos de 30-45\xB0C. La bota m\xE1s fresca del cat\xE1logo con solo 1.1 kg. El pie se mantiene seco y confortable en jornadas de 10+ horas.", "heroSeoBlocks": [{ title: "Ventilaci\xF3n para Clima C\xE1lido", text: "<strong>Paneles de malla t\xE9cnica</strong> en los laterales permiten circulaci\xF3n de aire continua. El aire caliente sale y el fresco entra, reduciendo la temperatura interior en <strong>5-8\xB0C</strong> vs bota cerrada." }, { title: "Forro Transpirable + Secado R\xE1pido", text: "Forro t\xE9cnico que <strong>transporta la humedad</strong> del sudor al exterior. Secado <strong>overnight</strong> que previene hongos y mal olor en temporadas de uso intensivo." }], "ctaBarQuote": "Cotizar Bota Verano", "productoCategoria": "Bota Forestal Verano", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1977" }, { modifier: "tpp", text: "Transpirable" }, { modifier: "solas", text: "1.1 kg" }], "productoMasVendido": false, "productoTitle": "Bota Forestal NFPA 1977 \u2014 Transpirable Verano", "productoTitleSub": "Ventilaci\xF3n \xB7 Forro T\xE9cnico \xB7 Secado R\xE1pido", "productoDesc": "Bota forestal con paneles de ventilaci\xF3n laterales y forro t\xE9cnico transpirable. Dise\xF1ada para climas c\xE1lidos de 30-45\xB0C donde la sudoraci\xF3n es intensa. Secado r\xE1pido overnight. La m\xE1s ligera con 1.1 kg. Certificaci\xF3n NFPA 1977.", "productoFeatures": ["Paneles ventilaci\xF3n laterales", "Forro t\xE9cnico transpirable", "Secado r\xE1pido overnight", "Clima c\xE1lido 30-45\xB0C", "Peso ultraligero 1.1 kg"], "productoAppTags": ["Temporada caliente", "Zonas costeras", "Jornadas largas", "Prevenci\xF3n hongos"], "gallery": [{ src: IMAGE, alt: "Bota forestal transpirable verano" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Combate forestal calor" }], "capasEyebrow": "Tecnolog\xEDa de Ventilaci\xF3n", "capasTitle": "Sistema Transpirable Verano", "capasDesc": "Paneles de malla, forro t\xE9cnico y secado r\xE1pido.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de ventilaci\xF3n y confort.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Clima C\xE1lido", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Climas c\xE1lidos de 30-45\xB0C</strong>: temporada de incendios en M\xE9xico central, zonas costeras, jornadas prolongadas y personal con historial de hongos por sudoraci\xF3n.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1977 + Ventilaci\xF3n T\xE9cnica", "certsDesc": "Certificaci\xF3n <strong>NFPA 1977</strong> con sistema de <strong>ventilaci\xF3n t\xE9cnica</strong> para clima c\xE1lido.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/botas-para-bomberos/forestal", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Transpirabilidad", "faqDescription": "Dudas sobre ventilaci\xF3n y confort.", "faqDocTitle": "Gu\xEDa Clima C\xE1lido", "faqDocDesc": "EPP para temporadas calientes.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Forestal", "relacionadosTitle": "EPP Forestal Relacionado", "relacionadosDesc": "Completa tu equipo forestal NFPA 1977.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/forestal/transpirable-verano/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/forestal/transpirable-verano/index.astro";
const $$url = "/productos/botas-para-bomberos/forestal/transpirable-verano";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
