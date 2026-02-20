import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "Sistema de 4 Capas ARFF", descripcion: "Configuraci\xF3n completa de 4 capas dise\xF1ada espec\xEDficamente para respuesta a incidentes aeron\xE1uticos. Incluye capa externa reflectante, barrera t\xE9rmica, barrera de humedad y forro interior de confort.", specs: [{ label: "Capas", valor: "4 especializadas" }, { label: "Dise\xF1o", valor: "ARFF espec\xEDfico" }, { label: "Certificaci\xF3n", valor: "NFPA 1971" }], color: "ember" },
    { num: "02", titulo: "Capa Aluminizada Reflectante", descripcion: "Capa externa con material aluminizado que refleja hasta el 95% de la radiaci\xF3n t\xE9rmica. Esencial para aproximaci\xF3n a incendios de combustible de aviaci\xF3n (Jet A/A-1) con temperaturas extremas.", specs: [{ label: "Material", valor: "Aluminizado" }, { label: "Reflexi\xF3n", valor: "95% radiaci\xF3n" }, { label: "Jet fuel", valor: "Protecci\xF3n" }], color: "smoke" },
    { num: "03", titulo: "TPP Superior 35+ cal/cm\xB2", descripcion: "Rendimiento de protecci\xF3n t\xE9rmica (TPP) superior a 35 cal/cm\xB2 para resistir las condiciones extremas de incendios de aeronaves. Supera requisitos m\xEDnimos de NFPA 1971 para mayor margen de seguridad.", specs: [{ label: "TPP", valor: "35+ cal/cm\xB2" }, { label: "Flash fire", valor: "Protecci\xF3n" }, { label: "Margen", valor: "Superior NFPA" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Sistema", label: "Capas", valor: "4 especializadas ARFF" },
    { categoria: "Sistema", label: "Capa externa", valor: "Aluminizada reflectante" },
    { categoria: "Sistema", label: "Barrera t\xE9rmica", valor: "Aislamiento extremo" },
    { categoria: "Protecci\xF3n", label: "TPP", valor: "35+ cal/cm\xB2" },
    { categoria: "Protecci\xF3n", label: "Radiaci\xF3n", valor: "95% reflexi\xF3n" },
    { categoria: "Protecci\xF3n", label: "Jet fuel", valor: "Resistente" },
    { categoria: "Dise\xF1o", label: "Configuraci\xF3n", valor: "Chaqueta + pantal\xF3n" },
    { categoria: "Dise\xF1o", label: "Peso", valor: "~3.5 kg" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1971 ARFF" },
    { categoria: "Certificaci\xF3n", label: "Uso", valor: "Aeroportuario" }
  ];
  const catClass = { "Sistema": "construccion", "Protecci\xF3n": "termico", "Dise\xF1o": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Rescate y Extinci\xF3n Aeroportuario (ARFF)", desc: "Respuesta primaria a incidentes de aeronaves en aeropuertos internacionales y nacionales certificados." },
    { titulo: "Incendios de Combustible Jet A/A-1", desc: "Combate de incendios de derrames de combustible de aviaci\xF3n con temperaturas extremas de radiaci\xF3n." },
    { titulo: "Evacuaci\xF3n de Aeronaves", desc: "Asistencia en evacuaci\xF3n de pasajeros y tripulaci\xF3n de aeronaves en emergencia con fuego activo." },
    { titulo: "Entrenamiento ARFF", desc: "Capacitaci\xF3n de personal ARFF en simuladores de fuego de aeronaves y ejercicios en vivo." }
  ];
  const faqs = [
    { q: "\xBFPor qu\xE9 ARFF requiere traje especializado?", a: "Los incendios de <strong>combustible de aviaci\xF3n (Jet A)</strong> producen radiaci\xF3n t\xE9rmica extrema mucho mayor que incendios estructurales. El traje ARFF tiene <strong>capa aluminizada</strong> que refleja esta radiaci\xF3n y TPP superior." },
    { q: "\xBFEs diferente al traje estructural NFPA 1971?", a: "Ambos cumplen <strong>NFPA 1971</strong>, pero el traje ARFF tiene caracter\xEDsticas adicionales: <strong>capa aluminizada</strong>, mayor reflexi\xF3n de radiaci\xF3n, resistencia a jet fuel y generalmente mayor TPP." },
    { q: "\xBFSe puede usar el traje ARFF para incendios estructurales?", a: "S\xED, cumple NFPA 1971. Sin embargo, es <strong>m\xE1s pesado y caluroso</strong> que un traje estructural est\xE1ndar. Para uso diario estructural, un traje sin capa aluminizada es m\xE1s pr\xE1ctico." }
  ];
  const relacionados = [
    { title: "Capa Aluminizada", badge: "95% reflexi\xF3n", description: "Radiaci\xF3n t\xE9rmica.", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/capa-aluminizada", buttonText: "Ver Aluminizado", image: IMAGE },
    { title: "Protecci\xF3n Jet Fuel", badge: "Resistente", description: "Combustible aviaci\xF3n.", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/proteccion-jet-fuel", buttonText: "Ver Jet Fuel", image: IMAGE },
    { title: "Casco ARFF", badge: "Aeroportuario", description: "Casco especializado.", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", buttonText: "Ver Casco", image: IMAGE },
    { title: "Bota Estructural", badge: "NFPA 1971", description: "Bota certificada.", href: "/productos/botas-para-bomberos/estructural", buttonText: "Ver Botas", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Capa Aluminizada", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/capa-aluminizada" },
    { label: "Protecci\xF3n Jet Fuel", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/proteccion-jet-fuel" },
    { label: "Radiaci\xF3n T\xE9rmica", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/radiacion-termica" },
    { label: "Cierre R\xE1pido", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/cierre-rapido" },
    { label: "Certificaciones ARFF", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/certificaciones" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Casco ARFF", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cabeza" }, { label: "Bota Estructural", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" }, { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" }, { label: "Capucha Nomex\xAE", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" }, { label: "Goggle de Bombero", href: "/productos/gafas-para-bomberos/goggle", tag: "Visual" }];
  const articulos = [{ label: "Cat\xE1logo Traje ARFF", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario", tag: "Cat\xE1logo" }, { label: "Requisitos OACI", href: "/productos", tag: "Normativa" }];
  const directorioLinks = [{ label: "Aeropuertos M\xE9xico", href: "/directorio" }, { label: "ARFF Internacional", href: "/directorio" }];
  const specsRapidas = [{ label: "Capas", valor: "4 ARFF" }, { label: "TPP", valor: "35+ cal/cm\xB2" }, { label: "Reflexi\xF3n", valor: "95%" }, { label: "NFPA", valor: "1971" }];
  const certItems = [{ code: "NFPA 1971", desc: "Structural + ARFF" }, { code: "TPP 35+", desc: "Protecci\xF3n t\xE9rmica" }, { code: "Aluminizado", desc: "Reflexi\xF3n 95%" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje ARFF Aeroportuario Sistema Completo \u2014 NFPA 1971 | BOMBERO.MX", "description": "Traje ARFF aeroportuario sistema completo de 4 capas con capa aluminizada. TPP 35+ cal/cm\xB2, reflexi\xF3n 95%. NFPA 1971. M\xE9xico.", "keywords": ["traje ARFF aeroportuario", "traje bombero aeropuerto", "traje NFPA 1971 ARFF", "traje aluminizado aviaci\xF3n", "equipo rescate aeronaves"], "canonical": "/productos/trajes-para-bomberos/traje-arff-aeroportuario/sistema-completo", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje ARFF Aeroportuario", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario" }, { label: "Sistema Completo" }], "heroBadge": "Traje ARFF \xB7 Aeroportuario \xB7 Sistema Completo \xB7 NFPA 1971", "heroTitle": "Traje ARFF Aeroportuario", "heroTitleHighlight": "Sistema Completo", "heroSubtitle": "Sistema de 4 capas dise\xF1ado para rescate y extinci\xF3n aeroportuario (ARFF). Capa aluminizada que refleja 95% de radiaci\xF3n t\xE9rmica. TPP superior a 35 cal/cm\xB2. Certificado NFPA 1971.", "heroSeoBlocks": [{ title: "Sistema de 4 Capas ARFF", text: "Configuraci\xF3n completa con <strong>capa aluminizada reflectante</strong>, barrera t\xE9rmica, barrera de humedad y forro interior. Dise\xF1o espec\xEDfico para <strong>incendios de combustible de aviaci\xF3n</strong>." }, { title: "TPP Superior 35+ cal/cm\xB2", text: "Protecci\xF3n t\xE9rmica que supera requisitos m\xEDnimos NFPA 1971. Refleja <strong>95% de radiaci\xF3n</strong> de incendios de Jet A/A-1 con temperaturas extremas." }], "ctaBarQuote": "Cotizar Sistema ARFF", "productoCategoria": "Traje ARFF Completo", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1971" }, { modifier: "tpp", text: "TPP 35+" }, { modifier: "solas", text: "ARFF" }], "productoMasVendido": true, "productoTitle": "Traje ARFF Aeroportuario \u2014 Sistema Completo", "productoTitleSub": "4 Capas \xB7 Aluminizado \xB7 TPP 35+ cal/cm\xB2", "productoDesc": "Traje ARFF de 4 capas con capa externa aluminizada que refleja 95% de radiaci\xF3n t\xE9rmica. TPP superior a 35 cal/cm\xB2 para incendios de combustible de aviaci\xF3n. Certificado NFPA 1971 ARFF.", "productoFeatures": ["Sistema 4 capas ARFF", "Capa aluminizada 95% reflexi\xF3n", "TPP 35+ cal/cm\xB2", "Resistente jet fuel", "Certificado NFPA 1971"], "productoAppTags": ["Aeropuertos", "Incendios Jet A", "Evacuaci\xF3n aeronaves", "Entrenamiento ARFF"], "gallery": [{ src: IMAGE, alt: "Traje ARFF sistema completo" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Operaci\xF3n ARFF aeropuerto" }], "capasEyebrow": "Sistema ARFF", "capasTitle": "4 Capas de Protecci\xF3n Aeroportuaria", "capasDesc": "Aluminizado, barrera t\xE9rmica, humedad y confort.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones del sistema ARFF.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso ARFF", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Rescate y extinci\xF3n aeroportuario</strong>: respuesta a incidentes de aeronaves, incendios de Jet A, evacuaci\xF3n de pasajeros y entrenamiento ARFF.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1971 ARFF", "certsDesc": "Certificaci\xF3n <strong>NFPA 1971</strong> con especificaciones <strong>ARFF aeroportuario</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-arff-aeroportuario", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas ARFF", "faqDescription": "Dudas sobre equipo aeroportuario.", "faqDocTitle": "Requisitos OACI", "faqDocDesc": "Normativa aeroportuaria.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema ARFF", "relacionadosTitle": "EPP Aeroportuario Relacionado", "relacionadosDesc": "Completa tu equipo ARFF.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-arff-aeroportuario/sistema-completo/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-arff-aeroportuario/sistema-completo/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-arff-aeroportuario/sistema-completo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
