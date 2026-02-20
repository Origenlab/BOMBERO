import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/rescate-montana-bomberos-01.avif";
  const capas = [
    { num: "01", titulo: "Cuero Tratado Retardante al Fuego", descripcion: "Cuero de primera calidad tratado con retardante al fuego que resiste brasas voladoras y ceniza caliente. El tratamiento es integral al cuero, no un recubrimiento superficial que se desgaste.", specs: [{ label: "Cuero", valor: "Tratado retardante" }, { label: "Brasas", valor: "Resistente" }, { label: "Tratamiento", valor: "Integral permanente" }], color: "ember" },
    { num: "02", titulo: "Costuras Kevlar\xAE Ign\xEDfugas", descripcion: "Todas las costuras est\xE1n realizadas con hilo Kevlar\xAE que no se derrite ni se quema con brasas. Las costuras son frecuentemente el punto m\xE1s d\xE9bil de una bota; el Kevlar\xAE elimina este riesgo.", specs: [{ label: "Hilo", valor: "Kevlar\xAE ign\xEDfugo" }, { label: "Fusi\xF3n", valor: "No se derrite" }, { label: "Combusti\xF3n", valor: "No se quema" }], color: "smoke" },
    { num: "03", titulo: "Suela para Suelo Caliente 260\xB0C", descripcion: "Suela Vibram\xAE con resistencia t\xE9rmica hasta 260\xB0C (500\xB0F) para caminar sobre suelo con brasas residuales despu\xE9s del paso del fuego. El bombero forestal frecuentemente debe atravesar zonas reci\xE9n quemadas.", specs: [{ label: "Temperatura", valor: "260\xB0C (500\xB0F)" }, { label: "Duraci\xF3n", valor: "Contacto prolongado" }, { label: "Brasas suelo", valor: "Resistente" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Cuero", label: "Tipo", valor: "Grain primera calidad" },
    { categoria: "Cuero", label: "Tratamiento", valor: "Retardante al fuego integral" },
    { categoria: "Cuero", label: "Brasas", valor: "Resistente voladoras" },
    { categoria: "Cuero", label: "Ceniza", valor: "Resistente caliente" },
    { categoria: "Costuras", label: "Hilo", valor: "Kevlar\xAE ign\xEDfugo" },
    { categoria: "Costuras", label: "Fusi\xF3n", valor: "No se derrite" },
    { categoria: "Costuras", label: "Combusti\xF3n", valor: "No se quema" },
    { categoria: "Suela", label: "Tipo", valor: "Vibram\xAE resistente calor" },
    { categoria: "Suela", label: "Temperatura", valor: "260\xB0C (500\xB0F)" },
    { categoria: "Suela", label: "Contacto", valor: "Prolongado" },
    { categoria: "Dise\xF1o", label: "Peso (par)", valor: "1.3 kg" },
    { categoria: "Dise\xF1o", label: "Altura ca\xF1a", valor: '8" (20 cm)' },
    { categoria: "Certificaci\xF3n", label: "Norma", valor: "NFPA 1977 wildland" }
  ];
  const catClass = { "Cuero": "construccion", "Costuras": "termico", "Suela": "termico", "Dise\xF1o": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "L\xEDnea de Fuego Directa", desc: "Combate en la l\xEDnea de fuego donde el contacto con brasas voladoras y ceniza caliente es constante durante la operaci\xF3n." },
    { titulo: "Cruce de Zonas Reci\xE9n Quemadas", desc: "Atravesar \xE1reas donde el fuego ya pas\xF3 pero el suelo a\xFAn tiene brasas activas y ceniza caliente." },
    { titulo: "Puntos Calientes (Hot Spots)", desc: "Revisi\xF3n y extinci\xF3n de puntos calientes residuales despu\xE9s del paso del frente de fuego principal." },
    { titulo: "Temporadas de Alto Riesgo", desc: "\xC9pocas de incendios severos (marzo-junio en M\xE9xico) donde las condiciones de fuego son m\xE1s intensas." }
  ];
  const faqs = [
    { q: "\xBFQu\xE9 tan calientes pueden estar las brasas?", a: "Las <strong>brasas voladoras</strong> pueden alcanzar temperaturas de <strong>600-800\xB0C</strong> pero son peque\xF1as y de corta duraci\xF3n de contacto. El cuero tratado resiste el contacto breve sin quemarse. Para <strong>contacto prolongado con fuego directo</strong>, se requiere bota estructural NFPA 1971." },
    { q: "\xBFEl tratamiento retardante se desgasta?", a: "No. El <strong>tratamiento retardante es integral al cuero</strong>, no un recubrimiento superficial. Se aplica durante el proceso de curtido y permanece activo durante <strong>toda la vida \xFAtil</strong> de la bota. No requiere reaplicaci\xF3n." },
    { q: "\xBFLas costuras Kevlar\xAE son m\xE1s fuertes?", a: "S\xED. El hilo <strong>Kevlar\xAE</strong> es m\xE1s resistente que el nylon o poli\xE9ster est\xE1ndar adem\xE1s de ser ign\xEDfugo. No solo no se quema, sino que las costuras son <strong>m\xE1s duraderas</strong> en general." }
  ];
  const relacionados = [
    { title: "Ligera Todo Terreno", badge: "1.2 kg", description: "La m\xE1s ligera del mercado.", href: "/productos/botas-para-bomberos/forestal/ligera-todo-terreno", buttonText: "Ver Ligera", image: IMAGE },
    { title: "Suela Vibram\xAE Monta\xF1a", badge: "Tracci\xF3n", description: "Megagrip para pendientes.", href: "/productos/botas-para-bomberos/forestal/suela-vibram-montana", buttonText: "Ver Monta\xF1a", image: IMAGE },
    { title: "Transpirable Verano", badge: "Ventilaci\xF3n", description: "Para climas c\xE1lidos.", href: "/productos/botas-para-bomberos/forestal/transpirable-verano", buttonText: "Ver Verano", image: IMAGE },
    { title: "Traje Forestal", badge: "NFPA 1977", description: "Traje resistente al fuego.", href: "/productos/trajes-para-bomberos", buttonText: "Ver Traje", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Ligera Todo Terreno", href: "/productos/botas-para-bomberos/forestal/ligera-todo-terreno" },
    { label: "Suela Vibram\xAE Monta\xF1a", href: "/productos/botas-para-bomberos/forestal/suela-vibram-montana" },
    { label: "Tobillo Reforzado", href: "/productos/botas-para-bomberos/forestal/tobillo-reforzado" },
    { label: "Transpirable Verano", href: "/productos/botas-para-bomberos/forestal/transpirable-verano" },
    { label: "Logger Trabajo Pesado", href: "/productos/botas-para-bomberos/forestal/logger-trabajo-pesado" },
    { label: "Ver Todas las Botas", href: "/productos/botas-para-bomberos" }
  ];
  const epp = [{ label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" }, { label: "Guantes Ign\xEDfugos", href: "/productos/guantes-para-bomberos", tag: "Manos" }, { label: "Casco Forestal", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", tag: "Cabeza" }];
  const articulos = [{ label: "Cat\xE1logo Bota Forestal NFPA 1977", href: "/productos/botas-para-bomberos/forestal", tag: "Cat\xE1logo" }, { label: "Resistencia T\xE9rmica", href: "/blog/incendios-forestales-equipo-combate", tag: "Blog" }];
  const directorioLinks = [{ label: "Brigadas CONAFOR", href: "/directorio" }, { label: "Temporada Incendios", href: "/directorio" }];
  const specsRapidas = [{ label: "Cuero", valor: "Retardante integral" }, { label: "Costuras", valor: "Kevlar\xAE ign\xEDfugo" }, { label: "Suela", valor: "260\xB0C" }, { label: "Peso", valor: "1.3 kg" }];
  const certItems = [{ code: "NFPA 1977", desc: "Wildland firefighting" }, { code: "Kevlar\xAE", desc: "Costuras ign\xEDfugas" }, { code: "260\xB0C", desc: "Suela resistente" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Bota Forestal NFPA 1977 Resistente a Brasas \u2014 Kevlar\xAE | BOMBERO.MX", "description": "Bota forestal NFPA 1977 resistente a brasas y ceniza caliente. Cuero tratado retardante, costuras Kevlar\xAE, suela 260\xB0C. M\xE9xico.", "keywords": ["bota forestal resistente brasas", "bota NFPA 1977 ign\xEDfuga", "bota bombero Kevlar", "bota forestal ceniza caliente", "bota l\xEDnea de fuego"], "canonical": "/productos/botas-para-bomberos/forestal/resistente-brasas", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Botas para Bombero", href: "/productos/botas-para-bomberos" }, { label: "Bota Forestal NFPA 1977", href: "/productos/botas-para-bomberos/forestal" }, { label: "Resistente a Brasas" }], "heroBadge": "Bota Forestal \xB7 NFPA 1977 \xB7 Brasas \xB7 Kevlar\xAE", "heroTitle": "Bota Forestal NFPA 1977", "heroTitleHighlight": "Resistente a Brasas", "heroSubtitle": "Cuero tratado con retardante al fuego que resiste brasas voladoras y ceniza caliente. Costuras Kevlar\xAE ign\xEDfugas que no se derriten. Suela para suelo caliente hasta 260\xB0C. Para l\xEDnea de fuego directa.", "heroSeoBlocks": [{ title: "Cuero Retardante al Fuego", text: "Cuero de primera calidad con <strong>tratamiento retardante integral</strong> que resiste brasas voladoras y ceniza caliente. El tratamiento es <strong>permanente</strong>, no un recubrimiento superficial." }, { title: "Costuras Kevlar\xAE Ign\xEDfugas", text: "Todas las costuras en <strong>hilo Kevlar\xAE</strong> que no se derrite ni se quema con brasas. Suela con resistencia t\xE9rmica hasta <strong>260\xB0C</strong> para suelo con brasas residuales." }], "ctaBarQuote": "Cotizar Bota Ign\xEDfuga", "productoCategoria": "Bota Forestal Brasas", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1977" }, { modifier: "tpp", text: "Kevlar\xAE" }, { modifier: "solas", text: "260\xB0C" }], "productoMasVendido": false, "productoTitle": "Bota Forestal NFPA 1977 \u2014 Resistente a Brasas", "productoTitleSub": "Cuero Retardante \xB7 Kevlar\xAE \xB7 Suela 260\xB0C", "productoDesc": "Bota forestal con cuero tratado retardante al fuego resistente a brasas. Costuras Kevlar\xAE ign\xEDfugas que no se derriten. Suela Vibram\xAE con resistencia t\xE9rmica hasta 260\xB0C para suelo con brasas residuales. Certificaci\xF3n NFPA 1977.", "productoFeatures": ["Cuero tratado retardante al fuego", "Costuras Kevlar\xAE ign\xEDfugas", "Resiste brasas voladoras", "Suela para suelo 260\xB0C", "Certificada NFPA 1977"], "productoAppTags": ["L\xEDnea de fuego", "Zonas quemadas", "Hot spots", "Alto riesgo"], "gallery": [{ src: IMAGE, alt: "Bota forestal resistente brasas" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Combate incendio forestal" }], "capasEyebrow": "Tecnolog\xEDa Ign\xEDfuga", "capasTitle": "Sistema Resistente al Fuego", "capasDesc": "Cuero retardante, costuras Kevlar\xAE y suela para suelo caliente.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de resistencia t\xE9rmica.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "L\xEDnea de Fuego", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Combate en l\xEDnea de fuego directa</strong>: contacto con brasas voladoras, cruce de zonas reci\xE9n quemadas, puntos calientes y temporadas de alto riesgo.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1977 + Kevlar\xAE + 260\xB0C", "certsDesc": "Certificaci\xF3n <strong>NFPA 1977</strong> con costuras <strong>Kevlar\xAE</strong> y suela resistente a <strong>260\xB0C</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/botas-para-bomberos/forestal", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Resistencia Brasas", "faqDescription": "Dudas sobre protecci\xF3n t\xE9rmica.", "faqDocTitle": "Ficha T\xE9cnica", "faqDocDesc": "Especificaciones de resistencia.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Forestal", "relacionadosTitle": "EPP Forestal Relacionado", "relacionadosDesc": "Completa tu equipo forestal NFPA 1977.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/forestal/resistente-brasas/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/forestal/resistente-brasas/index.astro";
const $$url = "/productos/botas-para-bomberos/forestal/resistente-brasas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
