import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Material de Barrera Multi-Qu\xEDmica", descripcion: "Material de barrera fabricado con tecnolog\xEDa de m\xFAltiples capas que resiste amplio espectro de sustancias qu\xEDmicas. Probado contra m\xE1s de 300 qu\xEDmicos industriales comunes.", specs: [{ label: "Qu\xEDmicos", valor: "300+ probados" }, { label: "Barrera", valor: "Multi-capa" }, { label: "Espectro", valor: "Amplio" }], color: "ember" },
    { num: "02", titulo: "Resistencia a \xC1cidos y Bases", descripcion: "Protecci\xF3n efectiva contra \xE1cidos minerales (sulf\xFArico, n\xEDtrico, clorh\xEDdrico) y bases fuertes (hidr\xF3xido de sodio, amonio). Tiempos de permeaci\xF3n certificados seg\xFAn norma ASTM.", specs: [{ label: "\xC1cidos", valor: "Minerales fuertes" }, { label: "Bases", valor: "Hidr\xF3xidos" }, { label: "Certificaci\xF3n", valor: "ASTM" }], color: "smoke" },
    { num: "03", titulo: "Resistencia a Solventes Org\xE1nicos", descripcion: "Barrera contra solventes org\xE1nicos como tolueno, acetona, metanol y combustibles. Los tiempos de breakthrough est\xE1n documentados para cada qu\xEDmico espec\xEDfico.", specs: [{ label: "Solventes", valor: "Org\xE1nicos" }, { label: "Combustibles", valor: "Hidrocarburos" }, { label: "Breakthrough", valor: "Documentado" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Qu\xEDmicos", label: "Probados", valor: "300+ sustancias" },
    { categoria: "Qu\xEDmicos", label: "\xC1cidos", valor: "Sulf\xFArico, n\xEDtrico, HCl" },
    { categoria: "Qu\xEDmicos", label: "Bases", valor: "NaOH, NH4OH" },
    { categoria: "Qu\xEDmicos", label: "Solventes", valor: "Tolueno, acetona, MeOH" },
    { categoria: "Permeaci\xF3n", label: "Norma", valor: "ASTM F739" },
    { categoria: "Permeaci\xF3n", label: "Datos", valor: "Tiempos breakthrough" },
    { categoria: "Degradaci\xF3n", label: "Norma", valor: "ASTM F903" },
    { categoria: "Degradaci\xF3n", label: "Evaluaci\xF3n", valor: "Visual + f\xEDsica" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1991/1992" },
    { categoria: "Certificaci\xF3n", label: "Qu\xEDmicos", valor: "ASTM certificados" }
  ];
  const catClass = { "Qu\xEDmicos": "construccion", "Permeaci\xF3n": "termico", "Degradaci\xF3n": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Industria Petroqu\xEDmica", desc: "Respuesta a derrames y fugas en refiner\xEDas, plantas qu\xEDmicas y terminales de almacenamiento de hidrocarburos." },
    { titulo: "Laboratorios y Farmac\xE9utica", desc: "Respuesta a incidentes con reactivos de laboratorio, solventes y qu\xEDmicos farmac\xE9uticos." },
    { titulo: "Transporte de Qu\xEDmicos", desc: "Respuesta a accidentes de pipas, autotanques y ferrocarril con carga qu\xEDmica identificada." },
    { titulo: "Tratamiento de Aguas", desc: "Manejo de incidentes con cloro, \xE1cido sulf\xFArico y otros qu\xEDmicos de tratamiento de agua." }
  ];
  const faqs = [
    { q: "\xBFQu\xE9 son las 'tablas de permeaci\xF3n'?", a: "Las <strong>tablas de permeaci\xF3n</strong> documentan cu\xE1nto tiempo tarda cada qu\xEDmico en atravesar el material del traje. El <strong>breakthrough time</strong> es el tiempo antes de que el qu\xEDmico llegue al interior. Se debe trabajar dentro de ese tiempo." },
    { q: "\xBFUn traje resiste TODOS los qu\xEDmicos?", a: "No. Ning\xFAn material resiste todos los qu\xEDmicos. Por eso es cr\xEDtico <strong>consultar las tablas de permeaci\xF3n</strong> del fabricante para cada qu\xEDmico espec\xEDfico y seleccionar el traje apropiado para cada incidente." },
    { q: "\xBFQu\xE9 pasa si no s\xE9 qu\xE9 qu\xEDmico es?", a: "Si la sustancia es <strong>desconocida</strong>, se debe asumir el peor escenario y usar <strong>Nivel A</strong> con el material de barrera de m\xE1s amplio espectro hasta que se identifique la sustancia." }
  ];
  const relacionados = [
    { title: "Traje HAZMAT Nivel A", badge: "M\xE1ximo", description: "Encapsulado total.", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-a", buttonText: "Ver Nivel A", image: IMAGE },
    { title: "Traje HAZMAT Nivel B", badge: "Splash", description: "Anti-salpicaduras.", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-b", buttonText: "Ver Nivel B", image: IMAGE },
    { title: "Guantes Multi-Qu\xEDmicos", badge: "HAZMAT", description: "Resistencia amplia.", href: "/productos/guantes-para-bomberos", buttonText: "Ver Guantes", image: IMAGE },
    { title: "Bota Qu\xEDmica", badge: "Caucho", description: "Resistente \xE1cidos.", href: "/productos/botas-para-bomberos/caucho", buttonText: "Ver Botas", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Traje HAZMAT Nivel A", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-a" },
    { label: "Traje HAZMAT Nivel B", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-b" },
    { label: "Sistema Encapsulamiento", href: "/productos/trajes-para-bomberos/traje-hazmat/encapsulamiento" },
    { label: "Compatible SCBA", href: "/productos/trajes-para-bomberos/traje-hazmat/scba" },
    { label: "Certificaci\xF3n CBRN", href: "/productos/trajes-para-bomberos/traje-hazmat/cbrn" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Guantes Multi-Qu\xEDmicos", href: "/productos/guantes-para-bomberos", tag: "Manos" }, { label: "Bota Qu\xEDmica Caucho", href: "/productos/botas-para-bomberos/caucho", tag: "Pies" }, { label: "SCBA", href: "/productos", tag: "Respiratorio" }];
  const articulos = [{ label: "Cat\xE1logo Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat", tag: "Cat\xE1logo" }, { label: "Tablas Permeaci\xF3n", href: "/productos", tag: "T\xE9cnico" }];
  const directorioLinks = [{ label: "Industria Petroqu\xEDmica", href: "/directorio" }, { label: "Respuesta Qu\xEDmica", href: "/directorio" }];
  const specsRapidas = [{ label: "Qu\xEDmicos", valor: "300+ probados" }, { label: "\xC1cidos", valor: "Minerales fuertes" }, { label: "Solventes", valor: "Org\xE1nicos" }, { label: "Norma", valor: "ASTM F739" }];
  const certItems = [{ code: "NFPA 1991/1992", desc: "Protecci\xF3n qu\xEDmica" }, { code: "ASTM F739", desc: "Permeaci\xF3n" }, { code: "300+", desc: "Qu\xEDmicos probados" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje HAZMAT Resistencia Qu\xEDmica \u2014 Multi-Qu\xEDmico ASTM | BOMBERO.MX", "description": "Traje HAZMAT con resistencia qu\xEDmica a 300+ sustancias. \xC1cidos, bases, solventes. Tablas de permeaci\xF3n ASTM. Nivel A y B. M\xE9xico.", "keywords": ["traje HAZMAT resistencia qu\xEDmica", "traje multi-qu\xEDmico", "traje \xE1cidos bases", "traje permeaci\xF3n ASTM", "equipo HAZMAT solventes"], "canonical": "/productos/trajes-para-bomberos/traje-hazmat/resistencia-quimica", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat" }, { label: "Resistencia Qu\xEDmica" }], "heroBadge": "Traje HAZMAT \xB7 Resistencia Qu\xEDmica \xB7 300+ Qu\xEDmicos", "heroTitle": "Traje HAZMAT", "heroTitleHighlight": "Resistencia Qu\xEDmica", "heroSubtitle": "Material de barrera multi-capa probado contra m\xE1s de 300 qu\xEDmicos industriales. Resistencia a \xE1cidos minerales, bases fuertes y solventes org\xE1nicos. Tiempos de permeaci\xF3n certificados ASTM.", "heroSeoBlocks": [{ title: "300+ Qu\xEDmicos Probados", text: "Material de barrera probado contra <strong>m\xE1s de 300 sustancias qu\xEDmicas</strong> industriales. \xC1cidos minerales (H2SO4, HNO3, HCl), bases fuertes (NaOH) y <strong>solventes org\xE1nicos</strong>." }, { title: "Permeaci\xF3n Certificada ASTM", text: "Tiempos de <strong>breakthrough certificados seg\xFAn ASTM F739</strong>. Consulta las tablas de permeaci\xF3n para seleccionar el traje apropiado para cada qu\xEDmico espec\xEDfico." }], "ctaBarQuote": "Cotizar Resistencia Qu\xEDmica", "productoCategoria": "Traje HAZMAT Qu\xEDmico", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1991/92" }, { modifier: "tpp", text: "Multi-Qu\xEDmico" }, { modifier: "solas", text: "ASTM" }], "productoMasVendido": false, "productoTitle": "Traje HAZMAT \u2014 Resistencia Qu\xEDmica", "productoTitleSub": "300+ Qu\xEDmicos \xB7 \xC1cidos \xB7 Bases \xB7 Solventes", "productoDesc": "Traje HAZMAT con material de barrera multi-capa resistente a m\xE1s de 300 qu\xEDmicos. Protecci\xF3n contra \xE1cidos minerales, bases fuertes y solventes org\xE1nicos. Tiempos de permeaci\xF3n certificados ASTM F739.", "productoFeatures": ["300+ qu\xEDmicos probados", "\xC1cidos minerales fuertes", "Bases (NaOH, NH4OH)", "Solventes org\xE1nicos", "Permeaci\xF3n ASTM F739"], "productoAppTags": ["Petroqu\xEDmica", "Laboratorios", "Transporte qu\xEDmico", "Tratamiento aguas"], "gallery": [{ src: IMAGE, alt: "Traje HAZMAT resistencia qu\xEDmica" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Respuesta qu\xEDmica industrial" }], "capasEyebrow": "Barrera Qu\xEDmica", "capasTitle": "Sistema Multi-Qu\xEDmico", "capasDesc": "Material multi-capa, \xE1cidos/bases y solventes.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de resistencia qu\xEDmica.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Qu\xEDmico", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Respuesta a incidentes qu\xEDmicos</strong>: industria petroqu\xEDmica, laboratorios, transporte de qu\xEDmicos y tratamiento de aguas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA + ASTM Qu\xEDmico", "certsDesc": "Certificaci\xF3n <strong>NFPA 1991/1992</strong> con permeaci\xF3n <strong>ASTM F739</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-hazmat", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Resistencia Qu\xEDmica", "faqDescription": "Dudas sobre permeaci\xF3n.", "faqDocTitle": "Tablas Permeaci\xF3n", "faqDocDesc": "Tiempos breakthrough.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema HAZMAT", "relacionadosTitle": "EPP Qu\xEDmico Relacionado", "relacionadosDesc": "Completa tu equipo de respuesta qu\xEDmica.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-hazmat/resistencia-quimica/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-hazmat/resistencia-quimica/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-hazmat/resistencia-quimica";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
