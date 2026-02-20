import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Puntera Composite Sin Metal", descripcion: "Puntera de material composite (fibra de vidrio reforzada) que cumple ASTM F2413-18 con la misma protecci\xF3n de impacto que el acero (75 lb-ft). No contiene metal, pasa detectores de seguridad y no genera chispas por impacto.", specs: [{ label: "Material", valor: "Composite fibra vidrio" }, { label: "Impacto", valor: "75 lb-ft (= acero)" }, { label: "Metal", valor: "Ninguno" }], color: "ember" },
    { num: "02", titulo: "Placa Antiperforaci\xF3n Composite", descripcion: "Placa de protecci\xF3n contra perforaciones tambi\xE9n en material composite no met\xE1lico. Cumple requisitos de resistencia a perforaci\xF3n (1100N) sin usar acero. Ideal para zonas donde el metal est\xE1 restringido.", specs: [{ label: "Material", valor: "Composite" }, { label: "Resistencia", valor: "1100N perforaci\xF3n" }, { label: "Metal", valor: "Ninguno" }], color: "smoke" },
    { num: "03", titulo: "Para Detectores de Seguridad", descripcion: "Dise\xF1ada espec\xEDficamente para pasar detectores de metales en aeropuertos, instalaciones de alta seguridad, embajadas y zonas militares. Sin interferencia con equipos de detecci\xF3n.", specs: [{ label: "Detectores", valor: "Pasa sin alarma" }, { label: "Aplicaci\xF3n", valor: "Aeropuertos, seguridad" }, { label: "Interferencia", valor: "Ninguna" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Puntera", label: "Material", valor: "Composite fibra de vidrio reforzada" },
    { categoria: "Puntera", label: "Resistencia impacto", valor: "75 lb-ft (igual que acero)" },
    { categoria: "Puntera", label: "Compresi\xF3n", valor: "2,500 lb" },
    { categoria: "Puntera", label: "Metal", valor: "Ninguno \u2014 100% composite" },
    { categoria: "Antiperforaci\xF3n", label: "Material", valor: "Composite no met\xE1lico" },
    { categoria: "Antiperforaci\xF3n", label: "Resistencia", valor: "1100N (EN ISO 20345)" },
    { categoria: "Antiperforaci\xF3n", label: "Metal", valor: "Ninguno \u2014 100% composite" },
    { categoria: "Detectores", label: "Detectores de metal", valor: "Pasa sin alarma" },
    { categoria: "Detectores", label: "Rayos X", valor: "Sin artefactos met\xE1licos" },
    { categoria: "Detectores", label: "Restricciones", valor: "Ninguna en zonas seguras" },
    { categoria: "Material exterior", label: "Tipo", valor: "Caucho nitrilo/PVC" },
    { categoria: "Dise\xF1o", label: "Altura ca\xF1a", valor: '16" (40 cm)' },
    { categoria: "Dise\xF1o", label: "Peso (par)", valor: "1.6 kg (20% menos que acero)" }
  ];
  const catClass = { "Puntera": "construccion", "Antiperforaci\xF3n": "termico", "Detectores": "ergonomia", "Material exterior": "certificacion", "Dise\xF1o": "ergonomia" };
  const aplicaciones = [
    { titulo: "Aeropuertos y Aviaci\xF3n", desc: "Personal de emergencia ARFF y HAZMAT que debe pasar controles de seguridad frecuentemente o trabajar cerca de equipos sensibles a metales." },
    { titulo: "Instalaciones de Alta Seguridad", desc: "Embajadas, instalaciones militares, centros de datos y edificios gubernamentales donde el acceso con metal est\xE1 restringido." },
    { titulo: "Hospitales con IRM", desc: "Personal de respuesta a emergencias en hospitales con equipos de Imagen por Resonancia Magn\xE9tica donde el metal puede ser peligroso." },
    { titulo: "Industria Electr\xF3nica", desc: "Plantas de fabricaci\xF3n de semiconductores y electr\xF3nica donde los metales ferromagn\xE9ticos pueden interferir con procesos sensibles." }
  ];
  const faqs = [
    { q: "\xBFLa puntera composite protege igual que el acero?", a: "S\xED. La puntera composite cumple exactamente el mismo est\xE1ndar <strong>ASTM F2413-18</strong> con resistencia a impacto de <strong>75 lb-ft</strong> y compresi\xF3n de <strong>2,500 lb</strong>. La diferencia es el material (composite vs acero), no el nivel de protecci\xF3n." },
    { q: "\xBFPor qu\xE9 elegir composite si protege igual?", a: "Las ventajas del composite son: <strong>1)</strong> No activa detectores de metal, <strong>2)</strong> No genera chispas por impacto, <strong>3)</strong> No conduce electricidad ni fr\xEDo, <strong>4)</strong> 20% m\xE1s ligera que equivalente en acero. Se elige por el <strong>entorno de trabajo</strong>, no por mayor protecci\xF3n." },
    { q: "\xBFLa bota composite funciona en \xE1reas ATEX?", a: "Esta bota espec\xEDfica <strong>no es antiest\xE1tica</strong>. Para atm\xF3sferas explosivas se requiere la versi\xF3n <strong>Antiest\xE1tica ESD</strong> que tambi\xE9n est\xE1 disponible con puntera composite. Consulte el modelo correcto seg\xFAn su \xE1rea clasificada." }
  ];
  const relacionados = [
    { title: "Resistente a Qu\xEDmicos", badge: "150+", description: "Con puntera de acero.", href: "/productos/botas-para-bomberos/caucho/resistente-quimicos", buttonText: "Ver Qu\xEDmicos", image: IMAGE },
    { title: "Antiest\xE1tica ESD", badge: "ATEX", description: "Para \xE1reas clasificadas.", href: "/productos/botas-para-bomberos/caucho/antiestatica-esd", buttonText: "Ver ESD", image: IMAGE },
    { title: "Descontaminaci\xF3n R\xE1pida", badge: "DECON", description: "Superficie ultra-lisa.", href: "/productos/botas-para-bomberos/caucho/descontaminacion-rapida", buttonText: "Ver DECON", image: IMAGE },
    { title: "Bota Estructural Composite", badge: "NFPA 1971", description: "Cuero con puntera composite.", href: "/productos/botas-para-bomberos/estructural/puntera-composite", buttonText: "Ver Estructural", image: "/images/directorio/botas-bombero-resistentes-01.avif" }
  ];
  const otrosModelos = [
    { label: "Resistente a Qu\xEDmicos", href: "/productos/botas-para-bomberos/caucho/resistente-quimicos" },
    { label: "Descontaminaci\xF3n R\xE1pida", href: "/productos/botas-para-bomberos/caucho/descontaminacion-rapida" },
    { label: "Traje Encapsulado Nivel A", href: "/productos/botas-para-bomberos/caucho/traje-encapsulado" },
    { label: "Resistente a Hidrocarburos", href: "/productos/botas-para-bomberos/caucho/resistente-hidrocarburos" },
    { label: "Antiest\xE1tica ESD", href: "/productos/botas-para-bomberos/caucho/antiestatica-esd" },
    { label: "Ver Todas las Botas", href: "/productos/botas-para-bomberos" }
  ];
  const epp = [{ label: "Traje HAZMAT", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" }, { label: "Guantes Composite", href: "/productos/guantes-para-bomberos", tag: "Manos" }, { label: "Casco No Met\xE1lico", href: "/productos/cascos-para-bomberos", tag: "Cabeza" }];
  const articulos = [{ label: "Cat\xE1logo Bota Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Puntera Composite", href: "/productos", tag: "Gu\xEDa" }];
  const directorioLinks = [{ label: "Aeropuertos ARFF", href: "/directorio" }, { label: "Instalaciones Seguras", href: "/directorio" }];
  const specsRapidas = [{ label: "Puntera", valor: "Composite (sin metal)" }, { label: "Impacto", valor: "75 lb-ft" }, { label: "Detectores", valor: "Pasa" }, { label: "Peso", valor: "1.6 kg (-20%)" }];
  const certItems = [{ code: "ASTM F2413-18", desc: "Impacto 75 lb-ft" }, { code: "Sin metal", desc: "100% composite" }, { code: "Detectores", desc: "Pasa sin alarma" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Bota Caucho HAZMAT \u2014 Puntera Composite Sin Metal | BOMBERO.MX", "description": "Bota de caucho HAZMAT con puntera composite sin metal. Pasa detectores de seguridad, misma protecci\xF3n ASTM F2413-18 que acero. Para aeropuertos, instalaciones seguras. M\xE9xico.", "keywords": ["bota puntera composite", "bota sin metal", "bota detectores seguridad", "bota HAZMAT composite", "bota aeropuerto ARFF"], "canonical": "/productos/botas-para-bomberos/caucho/puntera-composite", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Botas para Bombero", href: "/productos/botas-para-bomberos" }, { label: "Bota de Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho" }, { label: "Puntera Composite" }], "heroBadge": "Bota HAZMAT \xB7 Composite \xB7 Sin Metal \xB7 Detectores", "heroTitle": "Bota Caucho HAZMAT", "heroTitleHighlight": "Puntera Composite", "heroSubtitle": "Puntera y placa antiperforaci\xF3n de composite sin metal. Pasa detectores de seguridad sin alarma. Misma protecci\xF3n de impacto ASTM F2413-18 (75 lb-ft) que el acero. Ideal para aeropuertos e instalaciones de alta seguridad.", "heroSeoBlocks": [{ title: "Sin Metal \u2014 Misma Protecci\xF3n", text: "Puntera de <strong>composite fibra de vidrio</strong> que cumple <strong>ASTM F2413-18</strong> con protecci\xF3n de impacto de 75 lb-ft \u2014 exactamente igual que el acero. <strong>Sin metal</strong>, sin chispas, sin conducci\xF3n el\xE9ctrica." }, { title: "Pasa Detectores de Seguridad", text: "Dise\xF1ada para <strong>aeropuertos, embajadas y zonas de alta seguridad</strong> donde el personal debe pasar controles de metal frecuentemente. <strong>Sin interferencia</strong> con equipos de detecci\xF3n." }], "ctaBarQuote": "Cotizar Bota Composite", "productoCategoria": "Bota HAZMAT Composite", "productoBadges": [{ modifier: "nfpa", text: "Sin Metal" }, { modifier: "tpp", text: "Composite" }, { modifier: "solas", text: "Detectores" }], "productoMasVendido": false, "productoTitle": "Bota Caucho HAZMAT \u2014 Puntera Composite", "productoTitleSub": "Sin Metal \xB7 ASTM F2413-18 \xB7 Detectores", "productoDesc": "Bota de caucho con puntera y placa antiperforaci\xF3n de composite no met\xE1lico. Cumple ASTM F2413-18 con misma protecci\xF3n que el acero. Pasa detectores de seguridad sin alarma. 20% m\xE1s ligera que equivalente en acero.", "productoFeatures": ["Puntera composite 75 lb-ft", "Placa antiperforaci\xF3n composite", "100% sin metal", "Pasa detectores de seguridad", "20% m\xE1s ligera que acero"], "productoAppTags": ["Aeropuertos", "Alta seguridad", "Hospitales IRM", "Electr\xF3nica"], "gallery": [{ src: IMAGE, alt: "Bota HAZMAT puntera composite" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Operaci\xF3n segura" }], "capasEyebrow": "Tecnolog\xEDa Composite", "capasTitle": "Sistema Sin Metal", "capasDesc": "Puntera composite, placa antiperforaci\xF3n y compatibilidad con detectores.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de puntera, antiperforaci\xF3n y compatibilidad.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Zonas Restringidas Metal", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Instalaciones donde el metal est\xE1 restringido</strong>: aeropuertos, embajadas, instalaciones militares, hospitales con IRM y plantas de electr\xF3nica sensible.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "ASTM F2413-18 \u2014 Sin Metal", "certsDesc": "Puntera certificada <strong>ASTM F2413-18</strong> con 75 lb-ft de protecci\xF3n. <strong>100% sin metal</strong> \u2014 pasa detectores.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/botas-para-bomberos/caucho", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Puntera Composite", "faqDescription": "Dudas sobre protecci\xF3n y detectores.", "faqDocTitle": "Comparativa Acero vs Composite", "faqDocDesc": "Gu\xEDa t\xE9cnica de materiales.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Sin Metal", "relacionadosTitle": "EPP Sin Metal Relacionado", "relacionadosDesc": "Equipo completo composite para zonas restringidas.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/caucho/puntera-composite/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/caucho/puntera-composite/index.astro";
const $$url = "/productos/botas-para-bomberos/caucho/puntera-composite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
