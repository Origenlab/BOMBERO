import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Caucho Nitrilo Grado Petrolero", descripcion: "Formulaci\xF3n de caucho nitrilo espec\xEDfica para industria petrolera con resistencia superior a gasolina, diesel, combustibles de aviaci\xF3n (Jet A/Jet B), aceites lubricantes y solventes derivados del petr\xF3leo. Probada seg\xFAn normas API.", specs: [{ label: "Material", valor: "Nitrilo grado petrolero" }, { label: "Resistencia", valor: "Gasolina, diesel, jet fuel" }, { label: "Certificaci\xF3n", valor: "API compatible" }], color: "ember" },
    { num: "02", titulo: "Suela Antideslizante para Plataformas", descripcion: "Suela con patr\xF3n de tracci\xF3n dise\xF1ado para plataformas mojadas con aceite y combustibles. Resistente a hidrocarburos que no se degrada con exposici\xF3n prolongada. Cumple est\xE1ndares de seguridad de PEMEX y CFE.", specs: [{ label: "Suela", valor: "Antideslizante SRC" }, { label: "Superficies", valor: "Aceite, combustibles" }, { label: "Cumple", valor: "PEMEX, CFE" }], color: "smoke" },
    { num: "03", titulo: "Compatibilidad PEMEX y Petroqu\xEDmica", descripcion: "Bota aprobada para uso en instalaciones de PEMEX, CFE y plantas petroqu\xEDmicas privadas. Incluye documentaci\xF3n de resistencia a combustibles espec\xEDficos para auditor\xEDas de seguridad industrial.", specs: [{ label: "PEMEX", valor: "Aprobada" }, { label: "CFE", valor: "Aprobada" }, { label: "Documentaci\xF3n", valor: "Auditor\xEDas incluida" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Material", label: "Tipo", valor: "Caucho nitrilo grado petrolero" },
    { categoria: "Material", label: "Formulaci\xF3n", valor: "Espec\xEDfica para hidrocarburos" },
    { categoria: "Material", label: "Resistencia", valor: "Gasolina, diesel, jet fuel, aceites" },
    { categoria: "Resistencia Qu\xEDmica", label: "Gasolina", valor: "Excelente (>8 horas)" },
    { categoria: "Resistencia Qu\xEDmica", label: "Diesel", valor: "Excelente (>8 horas)" },
    { categoria: "Resistencia Qu\xEDmica", label: "Jet A/Jet B", valor: "Excelente (>8 horas)" },
    { categoria: "Resistencia Qu\xEDmica", label: "Aceites lubricantes", valor: "Excelente (>8 horas)" },
    { categoria: "Resistencia Qu\xEDmica", label: "Solventes petr\xF3leo", valor: "Buena (4-8 horas)" },
    { categoria: "Suela", label: "Tipo", valor: "Antideslizante SRC" },
    { categoria: "Suela", label: "Resistencia", valor: "Hidrocarburos, aceites" },
    { categoria: "Protecci\xF3n", label: "Puntera", valor: "Acero ASTM F2413-18" },
    { categoria: "Dise\xF1o", label: "Altura ca\xF1a", valor: '16" (40 cm)' },
    { categoria: "Dise\xF1o", label: "Peso (par)", valor: "1.9 kg" }
  ];
  const catClass = { "Material": "construccion", "Resistencia Qu\xEDmica": "termico", "Suela": "ergonomia", "Protecci\xF3n": "certificacion", "Dise\xF1o": "ergonomia" };
  const aplicaciones = [
    { titulo: "Refiner\xEDas de Petr\xF3leo", desc: "Operaciones de mantenimiento, emergencia y proceso en refiner\xEDas de PEMEX y privadas donde la exposici\xF3n a combustibles es constante." },
    { titulo: "Plataformas Petroleras", desc: "Trabajo en plataformas marinas de extracci\xF3n donde las superficies est\xE1n mojadas con agua de mar y residuos de crudo." },
    { titulo: "Plantas de Almacenamiento", desc: "Terminales de almacenamiento y distribuci\xF3n de combustibles donde los derrames menores son frecuentes." },
    { titulo: "Brigadas de Emergencia Petroleras", desc: "Equipamiento de brigadas de emergencia de PEMEX, contratistas petroleros y plantas petroqu\xEDmicas." }
  ];
  const faqs = [
    { q: "\xBFLa bota es compatible con normativa PEMEX?", a: "S\xED. La bota cumple con los <strong>requisitos de seguridad industrial de PEMEX</strong> para calzado en \xE1reas de proceso y almacenamiento de combustibles. Incluye documentaci\xF3n de resistencia a combustibles espec\xEDficos para <strong>auditor\xEDas de seguridad</strong>." },
    { q: "\xBFCu\xE1nto tiempo resiste exposici\xF3n a gasolina?", a: "El caucho nitrilo grado petrolero tiene <strong>resistencia excelente a gasolina por m\xE1s de 8 horas</strong> de exposici\xF3n continua sin degradaci\xF3n significativa. Para exposiciones m\xE1s prolongadas o repetidas, inspeccionar la bota regularmente y reemplazar si muestra signos de hinchaz\xF3n o ablandamiento." },
    { q: "\xBFLa suela se degrada con aceite?", a: "No. La suela est\xE1 formulada con <strong>caucho resistente a hidrocarburos</strong> que no se degrada, ablanda ni pierde tracci\xF3n con exposici\xF3n a aceites y combustibles. Es el mismo compuesto usado en calzado industrial para <strong>plataformas petroleras marinas</strong>." }
  ];
  const relacionados = [
    { title: "Antiest\xE1tica ESD", badge: "ATEX", description: "Para atm\xF3sferas explosivas.", href: "/productos/botas-para-bomberos/caucho/antiestatica-esd", buttonText: "Ver ESD", image: IMAGE },
    { title: "Resistente a Qu\xEDmicos", badge: "150+", description: "Resistencia qu\xEDmica general.", href: "/productos/botas-para-bomberos/caucho/resistente-quimicos", buttonText: "Ver Qu\xEDmicos", image: IMAGE },
    { title: "Traje Encapsulado", badge: "Nivel A", description: "Para vapores de hidrocarburos.", href: "/productos/botas-para-bomberos/caucho/traje-encapsulado", buttonText: "Ver Nivel A", image: IMAGE },
    { title: "Guantes Petroleros", badge: "Nitrilo", description: "Guantes para hidrocarburos.", href: "/productos/guantes-para-bomberos/hazmat", buttonText: "Ver Guantes", image: "/images/directorio/guantes-bombero-resistentes-01.avif" }
  ];
  const otrosModelos = [
    { label: "Resistente a Qu\xEDmicos", href: "/productos/botas-para-bomberos/caucho/resistente-quimicos" },
    { label: "Descontaminaci\xF3n R\xE1pida", href: "/productos/botas-para-bomberos/caucho/descontaminacion-rapida" },
    { label: "Traje Encapsulado Nivel A", href: "/productos/botas-para-bomberos/caucho/traje-encapsulado" },
    { label: "Antiest\xE1tica ESD", href: "/productos/botas-para-bomberos/caucho/antiestatica-esd" },
    { label: "Puntera Composite", href: "/productos/botas-para-bomberos/caucho/puntera-composite" },
    { label: "Ver Todas las Botas", href: "/productos/botas-para-bomberos" }
  ];
  const epp = [{ label: "Traje Petrolero FR", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" }, { label: "Guantes Nitrilo", href: "/productos/guantes-para-bomberos/hazmat", tag: "Manos" }, { label: "Casco con Visor", href: "/productos/cascos-para-bomberos", tag: "Cabeza" }];
  const articulos = [{ label: "Cat\xE1logo Bota Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho", tag: "Cat\xE1logo" }, { label: "Resistencia a Hidrocarburos", href: "/productos", tag: "Gu\xEDa" }];
  const directorioLinks = [{ label: "Estaciones Petroleras", href: "/directorio" }, { label: "PEMEX Emergencias", href: "/directorio" }];
  const specsRapidas = [{ label: "Material", valor: "Nitrilo petrolero" }, { label: "Gasolina", valor: ">8 horas" }, { label: "PEMEX/CFE", valor: "Aprobada" }, { label: "Suela", valor: "Antideslizante SRC" }];
  const certItems = [{ code: "API", desc: "Compatible petrolero" }, { code: "PEMEX", desc: "Requisitos cumplidos" }, { code: "SRC", desc: "Suela antideslizante" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Bota Caucho HAZMAT \u2014 Hidrocarburos PEMEX | BOMBERO.MX", "description": "Bota de caucho HAZMAT resistente a hidrocarburos: gasolina, diesel, jet fuel, aceites. Caucho nitrilo grado petrolero, suela antideslizante. Compatible PEMEX, CFE. M\xE9xico.", "keywords": ["bota resistente hidrocarburos", "bota PEMEX", "bota petrolera HAZMAT", "bota gasolina diesel", "bota caucho petrolero"], "canonical": "/productos/botas-para-bomberos/caucho/resistente-hidrocarburos", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Botas para Bombero", href: "/productos/botas-para-bomberos" }, { label: "Bota de Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho" }, { label: "Resistente a Hidrocarburos" }], "heroBadge": "Bota HAZMAT \xB7 Hidrocarburos \xB7 PEMEX \xB7 Petroqu\xEDmica", "heroTitle": "Bota Caucho HAZMAT", "heroTitleHighlight": "Resistente a Hidrocarburos", "heroSubtitle": "Caucho nitrilo grado petrolero con resistencia superior a gasolina, diesel, jet fuel y aceites. Suela antideslizante para plataformas mojadas. Compatible con requisitos de seguridad de PEMEX y CFE.", "heroSeoBlocks": [{ title: "Caucho Nitrilo Grado Petrolero", text: "Formulaci\xF3n espec\xEDfica para <strong>industria petrolera</strong> con resistencia excelente (>8 horas) a <strong>gasolina, diesel, jet fuel</strong> y aceites lubricantes. Probada seg\xFAn normas API." }, { title: "Compatible PEMEX y CFE", text: "Bota aprobada para instalaciones de <strong>PEMEX y CFE</strong>. Incluye documentaci\xF3n de resistencia para <strong>auditor\xEDas de seguridad industrial</strong> en plantas petroleras y petroqu\xEDmicas." }], "ctaBarQuote": "Cotizar Bota Petrolera", "productoCategoria": "Bota HAZMAT Petrolera", "productoBadges": [{ modifier: "nfpa", text: "Hidrocarburos" }, { modifier: "tpp", text: "PEMEX" }, { modifier: "solas", text: ">8 hrs" }], "productoMasVendido": false, "productoTitle": "Bota Caucho HAZMAT \u2014 Resistente a Hidrocarburos", "productoTitleSub": "Nitrilo Petrolero \xB7 PEMEX \xB7 Plataformas", "productoDesc": "Bota de caucho nitrilo grado petrolero con resistencia superior a gasolina, diesel, jet fuel y aceites lubricantes. Suela antideslizante SRC para plataformas mojadas con combustibles. Compatible con requisitos PEMEX y CFE.", "productoFeatures": ["Caucho nitrilo grado petrolero", "Resiste gasolina, diesel, jet fuel", "Suela antideslizante SRC", "Compatible PEMEX y CFE", "Documentaci\xF3n para auditor\xEDas"], "productoAppTags": ["Refiner\xEDas", "Plataformas", "Almacenamiento", "Brigadas petroleras"], "gallery": [{ src: IMAGE, alt: "Bota HAZMAT resistente hidrocarburos" }, { src: "/images/directorio/estacion-bomberos-refineria-01.avif", alt: "Refiner\xEDa petrolera" }], "capasEyebrow": "Tecnolog\xEDa Petrolera", "capasTitle": "Sistema Resistencia Hidrocarburos", "capasDesc": "Caucho nitrilo petrolero, suela antideslizante y compatibilidad PEMEX.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de material, resistencia y compatibilidad.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Industria Petrolera", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Industria petrolera y petroqu\xEDmica</strong>: refiner\xEDas de PEMEX, plataformas marinas, terminales de almacenamiento y brigadas de emergencia petroleras.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "API Compatible \u2014 PEMEX Aprobada", "certsDesc": "Compatible con normas <strong>API</strong> para industria petrolera. Cumple requisitos de seguridad <strong>PEMEX y CFE</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/botas-para-bomberos/caucho", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Hidrocarburos", "faqDescription": "Dudas sobre resistencia a combustibles.", "faqDocTitle": "Tabla de Resistencia", "faqDocDesc": "Tiempos de resistencia por combustible.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Petrolero", "relacionadosTitle": "EPP Petrolero Relacionado", "relacionadosDesc": "Equipo completo para industria petrolera.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/caucho/resistente-hidrocarburos/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/caucho/resistente-hidrocarburos/index.astro";
const $$url = "/productos/botas-para-bomberos/caucho/resistente-hidrocarburos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
