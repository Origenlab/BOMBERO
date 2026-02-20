import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/estacion-bomberos-petrolera-01.avif";
  const capas = [
    { num: "01", titulo: "Sistema de Colores por Rol", descripcion: "Colores estandarizados para identificaci\xF3n visual inmediata de roles: Rojo = L\xEDder/Jefe de brigada. Amarillo = Combate de incendio/extinci\xF3n. Naranja = Evacuaci\xF3n/b\xFAsqueda. Verde = Primeros auxilios/param\xE9dico. Blanco = Coordinaci\xF3n/comunicaciones.", specs: [{ label: "Rojo", valor: "L\xEDder de brigada" }, { label: "Amarillo", valor: "Combate incendio" }, { label: "Naranja/Verde/Blanco", valor: "Evacuaci\xF3n/M\xE9dico/Coord" }], color: "ember" },
    { num: "02", titulo: "Pigmentos Integrales al Shell", descripcion: "El color es integral al material del shell, no pintura superficial. Esto garantiza que el color no se desgaste, descascare ni desvanezca con el uso. El color se mantiene visible durante toda la vida \xFAtil del casco.", specs: [{ label: "Tipo color", valor: "Integral al material" }, { label: "Durabilidad", valor: "Vida \xFAtil del casco" }, { label: "Desgaste", valor: "Ninguno (no es pintura)" }], color: "smoke" },
    { num: "03", titulo: "Identificaci\xF3n Adicional", descripcion: "\xC1reas designadas para calcoman\xEDas de nombre, n\xFAmero de brigada y logo de empresa. Compatible con calcoman\xEDas reflectivas para visibilidad nocturna. Espacio frontal y lateral para identificaci\xF3n seg\xFAn normas internas.", specs: [{ label: "\xC1reas", valor: "Frontal + laterales" }, { label: "Calcoman\xEDas", valor: "Reflectivas compatibles" }, { label: "Personalizaci\xF3n", valor: "Logo empresa" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Colores Rol", label: "Rojo", valor: "L\xEDder de brigada / Jefe de emergencia" },
    { categoria: "Colores Rol", label: "Amarillo", valor: "Combate de incendio / Extinci\xF3n" },
    { categoria: "Colores Rol", label: "Naranja", valor: "Evacuaci\xF3n / B\xFAsqueda y rescate" },
    { categoria: "Colores Rol", label: "Verde", valor: "Primeros auxilios / Param\xE9dico" },
    { categoria: "Colores Rol", label: "Blanco", valor: "Coordinaci\xF3n / Comunicaciones" },
    { categoria: "Colores Rol", label: "Azul (opc)", valor: "T\xE9cnico / Especialista" },
    { categoria: "Pigmento", label: "Tipo", valor: "Integral al material" },
    { categoria: "Pigmento", label: "Durabilidad", valor: "Vida \xFAtil del casco" },
    { categoria: "Pigmento", label: "Desgaste", valor: "Ninguno" },
    { categoria: "Identificaci\xF3n", label: "\xC1reas", valor: "Frontal + laterales + posterior" },
    { categoria: "Identificaci\xF3n", label: "Calcoman\xEDas", valor: "Reflectivas compatibles" },
    { categoria: "Identificaci\xF3n", label: "Texto", valor: "Hasta 3 cm altura" },
    { categoria: "Certificaci\xF3n", label: "NOM-115-STPS", valor: "Todos los colores" }
  ];
  const catClass = { "Colores Rol": "construccion", "Pigmento": "construccion", "Identificaci\xF3n": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Brigadas Industriales Grandes", desc: "Plantas con brigadas de 10+ personas donde la identificaci\xF3n visual de roles es cr\xEDtica para coordinaci\xF3n sin comunicaci\xF3n verbal constante." },
    { titulo: "Emergencias Multi-Equipo", desc: "Incidentes donde m\xFAltiples equipos (extinci\xF3n, evacuaci\xF3n, m\xE9dicos) trabajan simult\xE1neamente y deben identificarse a distancia." },
    { titulo: "Simulacros y Entrenamiento", desc: "Capacitaci\xF3n de brigadas donde los colores ense\xF1an roles y responsabilidades de forma visual e intuitiva." },
    { titulo: "Cumplimiento Normativo Interno", desc: "Plantas con normas internas de seguridad que requieren identificaci\xF3n visual de roles en EPP de emergencia." }
  ];
  const faqs = [
    { q: "\xBFLos colores son est\xE1ndar o puedo elegir mi propio c\xF3digo?", a: "Los colores mostrados son el <strong>est\xE1ndar industrial m\xE1s com\xFAn</strong>, pero puede implementar su propio c\xF3digo de colores seg\xFAn normas internas de la planta. Lo importante es que el c\xF3digo sea <strong>consistente y documentado</strong> en su plan de emergencia." },
    { q: "\xBFEl color amarillo se ve bien de noche?", a: "S\xED. El <strong>amarillo es de alta visibilidad</strong> (Hi-Vis) y destaca tanto de d\xEDa como con iluminaci\xF3n artificial. Para visibilidad nocturna con linternas, recomendamos agregar <strong>calcoman\xEDas reflectivas</strong> que se iluminan con luz directa." },
    { q: "\xBFPuedo poner el logo de mi empresa en el casco?", a: "S\xED. Hay <strong>\xE1reas designadas</strong> para calcoman\xEDas con logo de empresa, nombre del brigadista y n\xFAmero de brigada. Se recomienda usar calcoman\xEDas <strong>reflectivas o resistentes al calor</strong> seg\xFAn el ambiente de trabajo." }
  ];
  const relacionados = [
    { title: "Sistema Completo Brigada", badge: "NOM-115", description: "Casco con todos los componentes.", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Protecci\xF3n T\xE9rmica", badge: "150\xB0C", description: "Shell con resistencia t\xE9rmica.", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/proteccion-termica", buttonText: "Ver T\xE9rmico", image: IMAGE },
    { title: "Capucha Nomex\xAE NFPA 1971", badge: "NFPA 1971", description: "Capucha para protecci\xF3n de cabeza y cuello en brigadas.", href: "/productos/capuchas-para-bomberos/nomex", buttonText: "Ver Capucha", image: "/images/directorio/equipo-bomberos-completo-01.avif" },
    { title: "Certificaciones", badge: "NOM/ANSI", description: "Documentaci\xF3n completa.", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/certificaciones", buttonText: "Ver Certs", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/sistema-completo" },
    { label: "Protecci\xF3n T\xE9rmica", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/proteccion-termica" },
    { label: "Visor Facial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/visor-facial" },
    { label: "Compatible SCBA", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/compatible-scba" },
    { label: "Certificaciones", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/certificaciones" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Gafas de Seguridad ANSI", href: "/productos/gafas-para-bomberos/seguridad", tag: "Ojos" }, { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" }, { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" }];
  const articulos = [{ label: "Cat\xE1logo Brigada Industrial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial", tag: "Cat\xE1logo" }, { label: "Sistema de Colores Gu\xEDa", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Blog" }];
  const directorioLinks = [{ label: "Brigadas Grandes", href: "/directorio" }, { label: "Petroqu\xEDmica", href: "/directorio" }];
  const specsRapidas = [{ label: "Colores", valor: "Rojo, amarillo, naranja, verde, blanco" }, { label: "Tipo", valor: "Integral al material" }, { label: "Personalizaci\xF3n", valor: "Logo + nombre" }, { label: "Certificaci\xF3n", valor: "NOM-115 todos colores" }];
  const certItems = [{ code: "NOM-115-STPS", desc: "Todos los colores" }, { code: "Integral", desc: "Color permanente" }, { code: "Reflectivo", desc: "Calcoman\xEDas compatibles" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Brigada \u2014 Identificaci\xF3n por Color | BOMBERO.MX", "description": "Casco brigada industrial con sistema de colores por rol: rojo l\xEDder, amarillo incendio, naranja evacuaci\xF3n, verde m\xE9dico, blanco coordinaci\xF3n. NOM-115-STPS M\xE9xico.", "keywords": ["casco brigada colores", "casco identificaci\xF3n rol", "casco brigada rojo amarillo", "casco industrial por color"], "canonical": "/productos/cascos-para-bomberos/casco-brigada-industrial/identificacion-color", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco Brigada Industrial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial" }, { label: "Identificaci\xF3n por Color" }], "heroBadge": "Identificaci\xF3n Visual \xB7 Roles \xB7 Colores Integrales", "heroTitle": "Casco Brigada Industrial", "heroTitleHighlight": "Identificaci\xF3n por Color", "heroSubtitle": "Sistema de colores para identificaci\xF3n visual de roles en brigadas industriales. Rojo = L\xEDder. Amarillo = Incendio. Naranja = Evacuaci\xF3n. Verde = M\xE9dico. Blanco = Coordinaci\xF3n. Pigmentos integrales al shell que no se desgastan.", "heroSeoBlocks": [{ title: "Colores por Rol de Brigada", text: "Identificaci\xF3n visual inmediata sin comunicaci\xF3n verbal: <strong>Rojo</strong> para l\xEDder, <strong>Amarillo</strong> para combate, <strong>Naranja</strong> para evacuaci\xF3n, <strong>Verde</strong> para m\xE9dico, <strong>Blanco</strong> para coordinaci\xF3n." }, { title: "Pigmentos Permanentes", text: "El color es <strong>integral al material</strong>, no pintura superficial. No se desgasta, descascare ni desvanece. Dura toda la <strong>vida \xFAtil del casco</strong>." }], "ctaBarQuote": "Cotizar Cascos por Color", "productoCategoria": "Casco Brigada Colores", "productoBadges": [{ modifier: "nfpa", text: "NOM-115" }, { modifier: "tpp", text: "5 Colores" }, { modifier: "solas", text: "Roles" }], "productoMasVendido": false, "productoTitle": "Casco Brigada Industrial \u2014 Identificaci\xF3n por Color", "productoTitleSub": "Rojo \xB7 Amarillo \xB7 Naranja \xB7 Verde \xB7 Blanco", "productoDesc": "Sistema de colores estandarizado para identificaci\xF3n de roles. Pigmentos integrales al material del shell que no se desgastan. \xC1reas para personalizaci\xF3n con nombre, n\xFAmero y logo de empresa.", "productoFeatures": ["5+ colores por rol", "Pigmento integral permanente", "\xC1reas para personalizaci\xF3n", "Calcoman\xEDas reflectivas", "NOM-115 todos colores"], "productoAppTags": ["Brigadas grandes", "Multi-equipo", "Simulacros", "Coordinaci\xF3n"], "gallery": [{ src: IMAGE, alt: "Cascos brigada por color" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Brigada identificada" }], "capasEyebrow": "Sistema de Identificaci\xF3n", "capasTitle": "Colores por Rol", "capasDesc": "Identificaci\xF3n visual inmediata para coordinaci\xF3n de brigadas.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones de Color", "specsDesc": "Sistema de colores y opciones de personalizaci\xF3n.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Coordinaci\xF3n de Brigadas", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Brigadas industriales</strong> donde la identificaci\xF3n visual de roles mejora la coordinaci\xF3n: plantas grandes, emergencias multi-equipo, simulacros de capacitaci\xF3n.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NOM-115-STPS Todos los Colores", "certsDesc": "Todos los colores cumplen <strong>NOM-115-STPS</strong> para protecci\xF3n industrial en M\xE9xico.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-brigada-industrial", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Identificaci\xF3n Color", "faqDescription": "Dudas sobre sistema de colores y personalizaci\xF3n.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Gu\xEDa de implementaci\xF3n de colores.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema de Identificaci\xF3n", "relacionadosTitle": "EPP con Identificaci\xF3n", "relacionadosDesc": "Complete con chalecos y brazaletes por rol.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-brigada-industrial/identificacion-color/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-brigada-industrial/identificacion-color/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-brigada-industrial/identificacion-color";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
