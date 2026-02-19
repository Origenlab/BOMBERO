import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../chunks/PageLayout_C3xQZUfp.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_BM8Ucdq5.mjs';
import { $ as $$CTABanner } from '../../chunks/CTABanner_CJ5vrrrF.mjs';
import { $ as $$CategoryCard, a as $$WhyChooseUs } from '../../chunks/WhyChooseUs_BCDa-qO3.mjs';
import { $ as $$FAQ } from '../../chunks/FAQ_BbVHhMJs.mjs';
import { $ as $$Breadcrumb, a as $$CTABar } from '../../chunks/CTABar_BFZT9nZk.mjs';
import { $ as $$ProductCard } from '../../chunks/ProductCard_DtmtO2cB.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const productos = [
    {
      id: "estructural",
      nombre: "Bota Estructural de Cuero para Bombero",
      slug: "/productos/botas-para-bomberos/estructural",
      badge: "NFPA 1971",
      badgeColor: "ember",
      imagen: "/images/directorio/botas-bombero-proteccion-01.avif",
      descripcion: "La bota est\xE1ndar para combate de incendios estructurales. Cuero de vaqueta de doble densidad, punta y plantilla de acero o compuesto, suela de hule resistente a hidrocarburos y corte lateral de seguridad. Certificada NFPA 1971.",
      caracteristicas: [
        "Cuero de vaqueta de doble densidad (m\xEDn. 2.2 mm)",
        "Punta de seguridad acero o compuesto no met\xE1lico",
        "Plantilla de acero antiperforaci\xF3n (EN 12568)",
        "Suela hule resistente a hidrocarburos y calor",
        "Certificada NFPA 1971 (edici\xF3n vigente)"
      ],
      aplicacion: "Incendio estructural \xB7 Rescate urbano \xB7 Colapso de estructuras"
    },
    {
      id: "caucho",
      nombre: "Bota de Caucho para Bombero (HAZMAT)",
      slug: "/productos/botas-para-bomberos/caucho",
      badge: "NFPA 1971 / 1991",
      badgeColor: "smoke",
      imagen: null,
      placeholderPaths: [
        "M7 21h10",
        "M12 21V11",
        "M6 11V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6",
        "M5 11h14l-2 10H7l-2-10z"
      ],
      descripcion: "Bota de caucho vulcanizado para operaciones con agua, espuma y materiales peligrosos. Sin partes met\xE1licas internas (non-sparking), resistente a m\xE1s de 100 qu\xEDmicos industriales. Compatible con traje HAZMAT Nivel A y B. Certificada NFPA 1971 y 1991.",
      caracteristicas: [
        "Caucho vulcanizado de densidad alta sin partes met\xE1licas",
        "Non-sparking: segura en atm\xF3sferas explosivas",
        "Resistente a \xE1cidos, \xE1lcalis e hidrocarburos",
        "Punta de seguridad de compuesto no met\xE1lico",
        "Certificada NFPA 1971 / NFPA 1991 / EN 13832"
      ],
      aplicacion: "HAZMAT \xB7 Derrame qu\xEDmico \xB7 Materiales peligrosos \xB7 Inundaciones"
    },
    {
      id: "forestal",
      nombre: "Bota Forestal para Bombero",
      slug: "/productos/botas-para-bomberos/forestal",
      badge: "NFPA 1977",
      badgeColor: "fire",
      imagen: null,
      placeholderPaths: [
        "M7 21h10",
        "M12 21V11",
        "M6 11V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6",
        "M5 11h14l-2 10H7l-2-10z"
      ],
      descripcion: "Bota de cuero ligero para operaciones de incendio forestal e interface. Suela de vibram o equivalente con perfil para terreno irregular, protecci\xF3n de tobillo reforzada y plantilla de amortiguaci\xF3n para largas jornadas de caminata. Certificada NFPA 1977.",
      caracteristicas: [
        "Cuero ligero de vaqueta con tratamiento retardante de llama",
        "Suela vibram con perfil profundo para terreno irregular",
        "Protecci\xF3n de tobillo reforzada para prevenir torceduras",
        "Plantilla de amortiguaci\xF3n para jornadas prolongadas en campo",
        "Certificada NFPA 1977 (edici\xF3n vigente)"
      ],
      aplicacion: "Incendio forestal \xB7 Quemas controladas \xB7 Interface urbano-rural"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Botas para Bomberos Certificadas NFPA | Cuero, Caucho y Forestal | BOMBERO.MX", "description": "Botas de bombero certificadas NFPA 1971, 1991 y 1977. Bota Estructural de Cuero, Bota de Caucho HAZMAT y Bota Forestal con env\xEDo a los 32 estados de M\xE9xico. Asesor\xEDa t\xE9cnica sin costo. \xA1Cotiza ahora!", "keywords": [
    "botas para bomberos",
    "botas bombero NFPA 1971",
    "bota estructural bombero cuero",
    "bota caucho bombero HAZMAT",
    "bota forestal bombero NFPA 1977",
    "botas bombero certificadas M\xE9xico",
    "calzado de seguridad bombero",
    "EPP pies bomberos M\xE9xico",
    "botas protecci\xF3n bombero",
    "comprar botas bombero M\xE9xico",
    "bota cuero vaqueta bombero",
    "bota goma bombero HAZMAT"
  ], "type": "website", "data-astro-cid-que246ld": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": [
    { label: "Productos", href: "/productos" },
    { label: "Botas para Bombero" }
  ], "data-astro-cid-que246ld": true })}    ${maybeRenderHead()}<section class="hero" data-astro-cid-que246ld> <div class="hero__bg" data-astro-cid-que246ld> <div class="hero__gradient" data-astro-cid-que246ld></div> <div class="hero__grid" data-astro-cid-que246ld></div> <div class="hero__glow hero__glow--1" data-astro-cid-que246ld></div> <div class="hero__glow hero__glow--2" data-astro-cid-que246ld></div> </div> <div class="container hero__container" data-astro-cid-que246ld> <div class="hero__content" data-astro-cid-que246ld> <div class="hero__badge" data-astro-cid-que246ld> <span class="hero__badge-dot" data-astro-cid-que246ld></span>
3 Tipos de Botas · Certificadas NFPA
</div> <h1 class="hero__title" data-astro-cid-que246ld>
Botas para
<span class="hero__title-highlight" data-astro-cid-que246ld>Bomberos</span>
Certificadas NFPA
</h1> <p class="hero__subtitle" data-astro-cid-que246ld>
El calzado de protección más crítico para cada tipo de operación. Botas estructurales
          de cuero, de caucho para HAZMAT y forestales para campo abierto. Certificadas NFPA
          con envío a los 32 estados de México.
</p> </div> <div class="hero__seo" data-astro-cid-que246ld> <div class="hero__seo-block" data-astro-cid-que246ld> <h2 class="hero__seo-title" data-astro-cid-que246ld>Distribuidores de Botas de Bombero Certificadas NFPA en México</h2> <p class="hero__seo-text" data-astro-cid-que246ld>
En <strong data-astro-cid-que246ld>BOMBERO.MX</strong> somos distribuidores autorizados de <strong data-astro-cid-que246ld>botas para bomberos</strong> de las marcas líderes mundiales. Nuestro catálogo incluye <strong data-astro-cid-que246ld>botas estructurales NFPA 1971</strong> de cuero de vaqueta, <strong data-astro-cid-que246ld>botas de caucho NFPA 1971/1991</strong> para operaciones HAZMAT y <strong data-astro-cid-que246ld>botas forestales NFPA 1977</strong> para trabajo en campo abierto.
</p> </div> <div class="hero__seo-block" data-astro-cid-que246ld> <h2 class="hero__seo-title" data-astro-cid-que246ld>Botas con Certificación NFPA para Cuerpos de Bomberos y Brigadas</h2> <p class="hero__seo-text" data-astro-cid-que246ld>
Cada <strong data-astro-cid-que246ld>bota de bombero</strong> de nuestro catálogo viene con certificado de laboratorio y ficha técnica completa, lista para procesos de <strong data-astro-cid-que246ld>licitación gubernamental</strong>. Proveemos a cuerpos de bomberos municipales, brigadas industriales, aeropuertos y protección civil en los <strong data-astro-cid-que246ld>32 estados de México</strong>.
</p> </div> </div> </div> </section> ${renderComponent($$result2, "CTABar", $$CTABar, { "quote": "Cotizar Botas de Bombero", "data-astro-cid-que246ld": true })}    <section class="section productos" id="catalogo" data-astro-cid-que246ld> <div class="container" data-astro-cid-que246ld> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Cat\xE1logo de Botas para Bomberos", "title": "3 Tipos de Botas de Bombero", "description": "Desde combate estructural hasta operaciones HAZMAT en terreno adverso. Cada bota est\xE1 dise\xF1ada para el entorno operativo espec\xEDfico del bombero.", "data-astro-cid-que246ld": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-que246ld>
Las <strong data-astro-cid-que246ld>botas de bombero</strong> son el componente del EPP que soporta el mayor desgaste operativo: protegen los pies del calor radiante, perforación, aplastamiento, resbalones en pisos mojados y exposición química. Seleccionar la bota correcta según la operación es esencial para la <strong data-astro-cid-que246ld>seguridad y el rendimiento del bombero</strong>.
</p> <p data-astro-cid-que246ld>
Todas nuestras botas incluyen fichas técnicas y certificados de laboratorio. Son compatibles con el resto del EPP del catálogo: trajes Nomex® y PBI®, cascos estructurales o forestales, y guantes certificados NFPA. Disponibles en tallas del 24 al 31 (MX).
</p> ` })} <div class="productos__grid" data-astro-cid-que246ld> ${productos.map((producto) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { ...producto, "altSuffix": "Bota de bombero certificada", "data-astro-cid-que246ld": true })}`)} </div> </div> </section>    <section class="section section--dark specs" data-astro-cid-que246ld> <div class="container" data-astro-cid-que246ld> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Tecnolog\xEDa y Materiales", "title": "Materiales, Certificaciones y Aplicaciones", "description": "Las botas de bombero de alto rendimiento combinan materiales de construcci\xF3n espec\xEDficos para cada tipo de riesgo, desde el cuero de vaqueta hasta el caucho vulcanizado certificado.", "data-astro-cid-que246ld": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-que246ld>
Las <strong data-astro-cid-que246ld>botas estructurales NFPA 1971</strong> se fabrican con cuero de vaqueta de doble densidad que resiste la penetración de calor, agua y derrames de hidrocarburos. La punta de acero o compuesto y la plantilla antiperforación cumplen los estándares de impacto y punción de la norma NFPA. Las <strong data-astro-cid-que246ld>botas de caucho</strong> para HAZMAT son de una sola pieza vulcanizada sin costuras que podrían comprometerse ante agentes químicos.
</p> <p data-astro-cid-que246ld>
Cada <strong data-astro-cid-que246ld>bota de bombero</strong> de nuestro catálogo incluye certificado de laboratorio y ficha técnica completa, lista para procesos de <strong data-astro-cid-que246ld>licitación pública</strong>. Proveemos documentación técnica a cuerpos de bomberos municipales, brigadas industriales y protección civil en los <strong data-astro-cid-que246ld>32 estados de México</strong>.
</p> ` })} <div class="specs__grid" data-astro-cid-que246ld> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Materiales y Construcci\xF3n", "icon": "boot", "description": "Cuero de vaqueta de doble densidad para botas estructurales. Caucho vulcanizado de alta densidad para HAZMAT. Cuero ligero con tratamiento retardante para forestales. Suelas de hule o vibram seg\xFAn la aplicaci\xF3n. Punta y plantilla de acero o compuesto no met\xE1lico.", "data-astro-cid-que246ld": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Certificaciones Aplicables", "icon": "certificate", "description": "NFPA 1971 para botas estructurales de combate en edificios. NFPA 1977 para botas forestales. NFPA 1991 para botas de caucho HAZMAT. Normas europeas EN ISO 20345 y EN 13832. Cada bota incluye certificado de laboratorio y ficha t\xE9cnica lista para licitaci\xF3n p\xFAblica.", "data-astro-cid-que246ld": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Operaciones y Usuarios", "icon": "users", "description": "Cuerpos de bomberos municipales y estatales, brigadas industriales y petroqu\xEDmicas, equipos USAR de b\xFAsqueda y rescate, equipos HAZMAT, bomberos forestales y aeroportuarios ARFF en los 32 estados de M\xE9xico. Disponibles en tallas 24 al 31 (MX).", "data-astro-cid-que246ld": true })} </div> </div> </section>    <section class="section comparativa" data-astro-cid-que246ld> <div class="container" data-astro-cid-que246ld> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Tabla Comparativa", "title": "\xBFQu\xE9 Bota de Bombero Necesitas?", "description": "Compara los 3 tipos de botas seg\xFAn su norma, aplicaci\xF3n y material para elegir el calzado de protecci\xF3n correcto.", "data-astro-cid-que246ld": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-que246ld>
La elección de la <strong data-astro-cid-que246ld>bota de bombero</strong> correcta depende del riesgo predominante: la <strong data-astro-cid-que246ld>bota estructural NFPA 1971</strong> es el estándar para incendios de edificios, la <strong data-astro-cid-que246ld>bota de caucho NFPA 1991</strong> es obligatoria en incidentes HAZMAT y derrames químicos, y la <strong data-astro-cid-que246ld>bota forestal NFPA 1977</strong> está optimizada para trabajo prolongado en terreno irregular.
</p> <p data-astro-cid-que246ld>
En <strong data-astro-cid-que246ld>BOMBERO.MX</strong> asesoramos a tu corporación sin costo para seleccionar la bota adecuada según el tipo de riesgo predominante. Elaboramos especificaciones técnicas y comparativos de productos para <strong data-astro-cid-que246ld>licitaciones gubernamentales</strong> en toda la República Mexicana.
</p> ` })} <div class="comparativa__wrapper" data-astro-cid-que246ld> <table class="comparativa__table" data-astro-cid-que246ld> <thead data-astro-cid-que246ld> <tr data-astro-cid-que246ld> <th data-astro-cid-que246ld>Bota</th> <th data-astro-cid-que246ld>Norma Principal</th> <th data-astro-cid-que246ld>Aplicación</th> <th data-astro-cid-que246ld>Material</th> <th data-astro-cid-que246ld>Característica Clave</th> </tr> </thead> <tbody data-astro-cid-que246ld> <tr data-astro-cid-que246ld> <td data-astro-cid-que246ld><strong data-astro-cid-que246ld>Estructural (Cuero)</strong></td> <td data-astro-cid-que246ld><span class="cert-chip cert-chip--ember" data-astro-cid-que246ld>NFPA 1971</span></td> <td data-astro-cid-que246ld>Incendio estructural, colapso, rescate urbano</td> <td data-astro-cid-que246ld>Cuero vaqueta doble densidad</td> <td data-astro-cid-que246ld>Punta acero, suela resistente a hidrocarburos</td> </tr> <tr data-astro-cid-que246ld> <td data-astro-cid-que246ld><strong data-astro-cid-que246ld>Caucho (HAZMAT)</strong></td> <td data-astro-cid-que246ld><span class="cert-chip cert-chip--smoke" data-astro-cid-que246ld>NFPA 1971 / 1991</span></td> <td data-astro-cid-que246ld>HAZMAT, derrames químicos, inundaciones</td> <td data-astro-cid-que246ld>Caucho vulcanizado non-sparking</td> <td data-astro-cid-que246ld>Sin partes metálicas, resistente a +100 químicos</td> </tr> <tr data-astro-cid-que246ld> <td data-astro-cid-que246ld><strong data-astro-cid-que246ld>Forestal</strong></td> <td data-astro-cid-que246ld><span class="cert-chip cert-chip--fire" data-astro-cid-que246ld>NFPA 1977</span></td> <td data-astro-cid-que246ld>Incendio forestal, interface, quemas controladas</td> <td data-astro-cid-que246ld>Cuero ligero + suela vibram</td> <td data-astro-cid-que246ld>Perfil para terreno irregular, larga jornada</td> </tr> </tbody> </table> </div> </div> </section>    ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "data-astro-cid-que246ld": true })}    ${renderComponent($$result2, "FAQ", $$FAQ, { "data-astro-cid-que246ld": true })}    <section class="section relacionados" data-astro-cid-que246ld> <div class="container" data-astro-cid-que246ld> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Equipo Complementario", "title": "Completa tu EPP de Bombero", "description": "Las botas son parte de un sistema integral. Equipa a tu personal con protecci\xF3n completa certificada NFPA.", "data-astro-cid-que246ld": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-que246ld>
Un <strong data-astro-cid-que246ld>sistema de EPP completo</strong> requiere que botas, traje, guantes y casco sean compatibles y cumplan la misma edición de norma NFPA. La <strong data-astro-cid-que246ld>bota estructural NFPA 1971</strong> debe usarse con traje estructural, casco NFPA 1971 y guantes estructurales para garantizar protección integral en cada operación.
</p> <p data-astro-cid-que246ld>
En <strong data-astro-cid-que246ld>BOMBERO.MX</strong> equipamos a tu personal con todo el sistema de protección personal de una sola fuente: trajes, cascos, guantes y botas certificados NFPA, con asesoría técnica sin costo y disponibilidad inmediata para los <strong data-astro-cid-que246ld>32 estados de México</strong>.
</p> ` })} <div class="rel__grid" data-astro-cid-que246ld> ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Trajes de Bombero", "icon": "shield", "image": "/images/directorio/traje-bombero-estructural-nfpa-01.avif", "href": "/productos/trajes-para-bomberos", "buttonText": "Trajes para Bombero", "items": [
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/estructural" },
    { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/forestal" },
    { label: "Traje ARFF Aeroportuario", href: "/productos/trajes-para-bomberos/arff" },
    { label: "Traje HAZMAT Nivel A / B", href: "/productos/trajes-para-bomberos/hazmat" }
  ], "data-astro-cid-que246ld": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Cascos para Bombero", "icon": "helmet", "image": "/images/directorio/casco-bombero-proteccion-cabeza-01.avif", "href": "/productos/cascos-para-bomberos", "buttonText": "Cascos para Bombero", "items": [
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/estructural" },
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos/forestal" },
    { label: "Casco de Rescate NFPA 1951", href: "/productos/cascos-para-bomberos/rescate" },
    { label: "Accesorios para Casco", href: "/productos/cascos-para-bomberos/accesorios" }
  ], "data-astro-cid-que246ld": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Guantes para Bombero", "icon": "glove", "image": "/images/directorio/guantes-bombero-resistentes-01.avif", "href": "/productos/guantes-para-bomberos", "buttonText": "Guantes para Bombero", "items": [
    { label: "Guantes Estructurales NFPA 1971", href: "/productos/guantes-para-bomberos/estructurales" },
    { label: "Guantes de Rescate NFPA 1951", href: "/productos/guantes-para-bomberos/rescate" },
    { label: "Guantes HAZMAT NFPA 1991", href: "/productos/guantes-para-bomberos/hazmat" },
    { label: "Guantes Forestales NFPA 1977", href: "/productos/guantes-para-bomberos/forestales" }
  ], "data-astro-cid-que246ld": true })} ${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": "Equipos SCBA", "icon": "shield", "href": "/productos/scba", "buttonText": "Equipos SCBA", "items": [
    { label: "SCBA 30 / 45 / 60 min", href: "/productos/scba/autonomia" },
    { label: "Cilindros y Botellas", href: "/productos/scba/cilindros" },
    { label: "M\xE1scaras Faciales Completas", href: "/productos/scba/mascaras" },
    { label: "Accesorios SCBA", href: "/productos/scba/accesorios" }
  ], "data-astro-cid-que246ld": true })} </div> </div> </section> ${renderComponent($$result2, "CTABanner", $$CTABanner, { "data-astro-cid-que246ld": true })} ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/index.astro";
const $$url = "/productos/botas-para-bomberos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
